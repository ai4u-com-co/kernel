import React from 'react';
import { Box } from '@mui/material';
import { AI4U_PALETTE } from '../../tokens/palette';
import { useColors } from '../../hooks';
import StatusDot, { type TelemetryStatus } from '../atoms/StatusDot';
import DashboardIcon, { type DashboardIconId } from '../atoms/DashboardIcon';

interface ModuleCardProps {
  /** Identificador estable del módulo (sirve como key en listas). */
  id: string;
  /** Nombre visible del módulo. */
  name: string;
  /** Descripción corta del módulo. */
  description: string;
  /** Ícono del set DashboardIcon. */
  icon: DashboardIconId;
  /** Color de acento del módulo (HEX). Se usa para borde, badge de ícono y CTA. */
  accentColor: string;
  /** Estado actual del módulo. */
  status: TelemetryStatus;
  /** URL para abrir el módulo. Si null → no se renderiza CTA. */
  openUrl?: string | null;
  /** Si true, renderiza CTA como "Herramienta interna" (sin link). */
  isCli?: boolean;
  /** Etiqueta del CTA cuando online. Default "Abrir". */
  ctaLabel?: string;
}

const STATUS_TEXT: Record<TelemetryStatus, string> = {
  online:   'Disponible',
  offline:  'No disponible',
  starting: 'Iniciando…',
  checking: 'Verificando…',
  idle:     'Inactivo',
};

function hexToRgba(hex: string, a: number) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

/**
 * ModuleCard — tarjeta de módulo para dashboards de monitoreo (Mission Control).
 *
 * Estructura: accent bar + icon badge + nombre + status + descripción + CTA.
 * Consume StatusDot y DashboardIcon. Color de acento configurable por módulo.
 *
 * @example
 * <ModuleCard
 *   id="preflight"
 *   name="preFlight"
 *   description="Validación PDF con IA"
 *   icon="file-scan"
 *   accentColor="#3DAED1"
 *   status="online"
 *   openUrl="https://pre-flight-ai4u.vercel.app"
 * />
 */
const ModuleCard: React.FC<ModuleCardProps> = ({
  name,
  description,
  icon,
  accentColor,
  status,
  openUrl,
  isCli = false,
  ctaLabel = 'Abrir',
}) => {
  const colors = useColors();
  const isOnline = status === 'online';
  const isChecking = status === 'checking';
  const surface = colors.contrast.surface;
  const textPrimary = colors.contrast.text.primary;
  const textSecondary = colors.contrast.text.secondary;
  const textDisabled = colors.contrast.text.disabled;
  const borderSubtle = colors.contrast.border;

  return (
    <Box
      sx={{
        backgroundColor: surface,
        border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
        borderRadius: 0,                        // Brutalist DS
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.2s steps(4, end)',
        '&:hover': {
          transform: 'translate(-2px, -2px)',
          boxShadow: `4px 4px 0px ${hexToRgba(accentColor, 0.6)}`,
          borderColor: hexToRgba(accentColor, 0.5),
        },
      }}
    >
      {/* Accent bar */}
      <Box sx={{ height: 3, backgroundColor: accentColor, flexShrink: 0 }} />

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2.5, gap: 1.5 }}>
        {/* Header: icon + name + status */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: hexToRgba(accentColor, 0.1),
              border: `1px solid ${hexToRgba(accentColor, 0.2)}`,
            }}
          >
            <DashboardIcon id={icon} size="md" color={accentColor} strokeWidth={1.5} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box
              component="div"
              sx={{
                fontFamily: '"Red Hat Display", sans-serif',
                fontWeight: 800,
                fontSize: 15,
                color: textPrimary,
                lineHeight: 1.2,
              }}
            >
              {name}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
              <StatusDot status={status} size={6} />
              <Box
                component="span"
                sx={{
                  fontSize: 11,
                  color: AI4U_PALETTE.telemetry[status],
                }}
              >
                {STATUS_TEXT[status]}
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Description */}
        <Box
          component="p"
          sx={{
            fontSize: 13,
            lineHeight: 1.6,
            color: textSecondary,
            m: 0,
            flex: 1,
          }}
        >
          {description}
        </Box>

        {/* CTA */}
        <Box sx={{ mt: 0.5 }}>
          {isCli ? (
            <Box
              component="div"
              sx={{ fontSize: 12, color: textDisabled, fontStyle: 'italic' }}
            >
              Herramienta de línea de comandos — se ejecuta desde el servidor
            </Box>
          ) : openUrl ? (
            <Box
              component="a"
              href={isOnline ? openUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e: React.MouseEvent) => { if (!isOnline) e.preventDefault(); }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                py: 1.25,
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: 13,
                fontFamily: '"Red Hat Display", sans-serif',
                transition: 'all 0.15s',
                backgroundColor: isOnline ? accentColor : 'transparent',
                color: isOnline ? AI4U_PALETTE.white : textDisabled,
                border: isOnline ? 'none' : `1px solid ${borderSubtle}`,
                cursor: isOnline ? 'pointer' : isChecking ? 'default' : 'not-allowed',
                opacity: isChecking ? 0.6 : 1,
              }}
            >
              <DashboardIcon
                id="external-link"
                size={14}
                color={isOnline ? AI4U_PALETTE.white : textDisabled}
                strokeWidth={2.2}
              />
              {isOnline ? ctaLabel : isChecking ? 'Verificando…' : 'No disponible'}
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
};

export default ModuleCard;
