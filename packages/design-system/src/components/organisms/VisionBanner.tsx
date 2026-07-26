import React, { useState, ReactNode } from 'react';
import { Box } from '@mui/material';
import { AI4U_PALETTE } from '../../tokens/palette';
import { useColors } from '../../hooks';
import DashboardIcon, { type DashboardIconId } from '../atoms/DashboardIcon';

interface Pillar {
  label: string;
  icon: DashboardIconId;
  color: string;
}

interface VisionBannerProps {
  /** Etiqueta superior (chip mono). */
  label: string;
  /** Cuerpo del banner — puede incluir markup. */
  body: ReactNode;
  /** Pilares opcionales mostrados como chips bajo el cuerpo. */
  pillars?: Pillar[];
  /** Estado inicial. Default `true`. */
  defaultOpen?: boolean;
  /** Color de acento del bar lateral. Default hotOrange del DS. */
  accentColor?: string;
}

/**
 * VisionBanner — banner colapsable de misión/visión para dashboards.
 *
 * Estructura: header con barra lateral de acento + label + toggle,
 * cuerpo expandible con texto y chips opcionales de pilares.
 *
 * @example
 * <VisionBanner
 *   label="Nuestra Misión"
 *   body={<>Construir...</>}
 *   pillars={[{ label: "Valor", icon: "diamond", color: "#3DAED1" }]}
 * />
 */
const VisionBanner: React.FC<VisionBannerProps> = ({
  label,
  body,
  pillars,
  defaultOpen = true,
  accentColor = AI4U_PALETTE.hotOrange,
}) => {
  const [open, setOpen] = useState(defaultOpen);
  const colors = useColors();

  return (
    <Box
      sx={{
        borderRadius: 0,
        overflow: 'hidden',
        border: `1px solid ${colors.contrast.border}`,
        backgroundColor: colors.contrast.surface,
      }}
    >
      <Box
        component="button"
        onClick={() => setOpen((o) => !o)}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 1.5,
          px: 2.5,
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          borderBottom: open ? `1px solid ${colors.contrast.border}` : 'none',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <Box sx={{ width: 3, height: 16, backgroundColor: accentColor }} />
          <Box
            component="span"
            sx={{
              fontFamily: '"Necto Mono", monospace',
              fontSize: 10,
              fontWeight: 700,
              color: colors.contrast.text.secondary,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}
          >
            {label}
          </Box>
        </Box>
        <Box
          component="span"
          sx={{
            fontFamily: '"Necto Mono", monospace',
            fontSize: 11,
            color: colors.contrast.text.disabled,
            transform: open ? 'rotate(180deg)' : 'rotate(0)',
            display: 'inline-block',
            transition: 'transform 0.2s',
          }}
        >
          ∧
        </Box>
      </Box>

      {open && (
        <Box sx={{ p: 2.5 }}>
          <Box
            component="div"
            sx={{
              fontSize: 13.5,
              lineHeight: 1.75,
              color: colors.contrast.text.primary,
              fontStyle: 'italic',
              maxWidth: 720,
            }}
          >
            {body}
          </Box>

          {pillars && pillars.length > 0 && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
              {pillars.map((p) => (
                <Box
                  key={p.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.875,
                    px: 1.5,
                    py: 0.625,
                    backgroundColor: `${p.color}0d`,
                    border: `1px solid ${p.color}30`,
                  }}
                >
                  <DashboardIcon id={p.icon} size={12} color={p.color} strokeWidth={2} />
                  <Box
                    component="span"
                    sx={{
                      fontFamily: '"Necto Mono", monospace',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: p.color,
                    }}
                  >
                    {p.label}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};

export default VisionBanner;
