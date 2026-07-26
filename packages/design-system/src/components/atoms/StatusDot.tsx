import React from 'react';
import { Box, keyframes } from '@mui/material';
import { AI4U_PALETTE } from '../../tokens/palette';

export type TelemetryStatus = keyof typeof AI4U_PALETTE.telemetry;
// 'online' | 'offline' | 'starting' | 'checking' | 'idle'

interface StatusDotProps {
  status: TelemetryStatus;
  size?: number;          // px, default 8
  pulse?: boolean;        // override; por defecto pulsa en 'online' y 'starting'
  label?: string;         // si se pasa, renderiza dot + label (uppercase mono)
  className?: string;
}

const pulseKeyframes = keyframes`
  0%   { box-shadow: 0 0 0 0 currentColor;  opacity: 1; }
  70%  { box-shadow: 0 0 0 6px transparent; opacity: 0.85; }
  100% { box-shadow: 0 0 0 0 transparent;   opacity: 1; }
`;

/**
 * StatusDot — indicador de estado de servicio para dashboards de monitoreo.
 *
 * Usa la paleta `telemetry` (verde/rojo/ámbar), NO la paleta semántica de marca.
 *
 * @example
 * <StatusDot status="online" />
 * <StatusDot status="offline" label="No disponible" />
 */
const StatusDot: React.FC<StatusDotProps> = ({
  status,
  size = 8,
  pulse,
  label,
  className,
}) => {
  const color = AI4U_PALETTE.telemetry[status];
  const shouldPulse = pulse ?? (status === 'online' || status === 'starting');

  const dot = (
    <Box
      className={className}
      sx={{
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: color,
        color,                // currentColor para el pulso
        flexShrink: 0,
        display: 'inline-block',
        animation: shouldPulse ? `${pulseKeyframes} 2s ease-out infinite` : 'none',
      }}
    />
  );

  if (!label) return dot;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
      }}
    >
      {dot}
      <Box
        component="span"
        sx={{
          fontFamily: '"Necto Mono", monospace',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color,
        }}
      >
        {label}
      </Box>
    </Box>
  );
};

export default StatusDot;
