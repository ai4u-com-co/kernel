import React, { useRef, useState, ReactNode } from 'react';
import { Box } from '@mui/material';
import { AI4U_PALETTE, SURFACE_PRESETS } from '../../tokens/palette';

interface AuthCardProps {
  /** Slot para branding (logo + título + subtítulo). Renderizado encima del card. */
  branding?: ReactNode;
  /** Etiqueta superior del card (mono uppercase, prefijo ◈). */
  label?: string;
  /** Placeholder del input. */
  placeholder?: string;
  /** Tipo de input. Default `password`. */
  inputType?: 'password' | 'text';
  /** Texto del botón cuando idle. Default `Entrar`. */
  submitLabel?: string;
  /** Texto del botón cuando loading. Default `Verificando…`. */
  loadingLabel?: string;
  /** Color de acento (botón + focus). Default Tamaprint primary. */
  accentColor?: string;
  /** Slot bajo el card (footer/legal/atribución). */
  footer?: ReactNode;
  /** Submit handler. Recibe el valor del input y debe devolver Promise<{ ok, error? }>. */
  onSubmit: (value: string) => Promise<{ ok: boolean; error?: string }>;
}

/**
 * AuthCard — formulario de autenticación brutalist para dashboards internos.
 *
 * Estructura: branding opcional → card oscuro con label + input + error + submit
 * → footer opcional. Maneja loading, error y shake animation internamente.
 *
 * @example
 * <AuthCard
 *   branding={<Branding logo={...} title="Mission Control" />}
 *   label="Acceso restringido"
 *   onSubmit={async (pw) => { ... }}
 * />
 */
const AuthCard: React.FC<AuthCardProps> = ({
  branding,
  label = 'Acceso restringido',
  placeholder = 'Contraseña',
  inputType = 'password',
  submitLabel = 'Entrar',
  loadingLabel = 'Verificando…',
  accentColor = AI4U_PALETTE.tamaprint.primary,
  footer,
  onSubmit,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = inputRef.current?.value ?? '';
    if (!value) return;
    setLoading(true);
    setError('');
    const result = await onSubmit(value);
    if (!result.ok) {
      setError(result.error ?? 'Error de autenticación');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      if (inputRef.current) {
        inputRef.current.value = '';
        inputRef.current.focus();
      }
    }
    setLoading(false);
  }

  const errorColor = AI4U_PALETTE.telemetry.offline;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%', maxWidth: 360 }}>
      {branding && <Box sx={{ textAlign: 'center', mb: 4 }}>{branding}</Box>}

      <Box
        sx={{
          backgroundColor: SURFACE_PRESETS.dashboardDark.surface,
          border: `1px solid ${SURFACE_PRESETS.dashboardDark.border}`,
          borderRadius: 0,
          p: '28px 28px 24px',
          animation: shake ? 'auth-shake 0.4s ease' : undefined,
          '@keyframes auth-shake': {
            '0%,100%': { transform: 'translateX(0)' },
            '20%':     { transform: 'translateX(-8px)' },
            '40%':     { transform: 'translateX(8px)' },
            '60%':     { transform: 'translateX(-5px)' },
            '80%':     { transform: 'translateX(5px)' },
          },
        }}
      >
        <Box
          sx={{
            fontFamily: '"Necto Mono", monospace',
            fontSize: 9.5,
            fontWeight: 700,
            color: SURFACE_PRESETS.dashboardDark.text.secondary,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            mb: 2,
          }}
        >
          ◈ {label}
        </Box>

        <Box
          component="input"
          ref={inputRef}
          type={inputType}
          placeholder={placeholder}
          autoFocus
          disabled={loading}
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            background: 'rgba(255,255,255,0.05)',
            border: `1px solid ${error ? errorColor : 'rgba(255,255,255,0.1)'}`,
            borderRadius: 0,
            p: '12px 14px',
            color: SURFACE_PRESETS.dashboardDark.text.primary,
            fontSize: 14,
            outline: 'none',
            fontFamily: 'inherit',
            mb: error ? 1 : 2,
            transition: 'border-color 0.15s',
            '&:focus': {
              borderColor: error ? errorColor : accentColor,
            },
          }}
        />

        {error && (
          <Box
            sx={{
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              color: errorColor,
              letterSpacing: '0.08em',
              mb: 1.75,
            }}
          >
            {error}
          </Box>
        )}

        <Box
          component="button"
          type="submit"
          disabled={loading}
          sx={{
            width: '100%',
            p: '12px 0',
            borderRadius: 0,
            border: 'none',
            backgroundColor: loading ? `${accentColor}66` : accentColor,
            color: AI4U_PALETTE.white,
            fontFamily: '"Red Hat Display", sans-serif',
            fontWeight: 800,
            fontSize: 13,
            letterSpacing: '0.08em',
            cursor: loading ? 'default' : 'pointer',
            transition: 'background-color 0.15s',
          }}
        >
          {loading ? loadingLabel : submitLabel}
        </Box>
      </Box>

      {footer && <Box sx={{ textAlign: 'center', mt: 2.5 }}>{footer}</Box>}
    </Box>
  );
};

export default AuthCard;
