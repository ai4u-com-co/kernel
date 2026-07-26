import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { useColors } from '../../hooks';

interface DashboardTopBarProps {
  /** Slot para el logo de marca (img o componente). */
  logo?: ReactNode;
  /** Título principal del dashboard. */
  title: string;
  /** Subtítulo / meta (mono uppercase). */
  subtitle?: string;
  /** Slot para badges/indicadores secundarios (lado derecho, antes de actions). */
  badges?: ReactNode;
  /** Slot para botones de acción (lado derecho). */
  actions?: ReactNode;
}

/**
 * DashboardTopBar — barra superior de dashboards (Mission Control).
 *
 * Estructura: logo + divider + title/subtitle a la izquierda;
 * badges + actions a la derecha.
 *
 * @example
 * <DashboardTopBar
 *   logo={<img src="/logo.svg" />}
 *   title="Ecosistema IA"
 *   subtitle="12 módulos · 11 web · 1 CLI"
 *   actions={<Button>Actualizar</Button>}
 * />
 */
const DashboardTopBar: React.FC<DashboardTopBarProps> = ({
  logo,
  title,
  subtitle,
  badges,
  actions,
}) => {
  const colors = useColors();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: 2,
        px: 3.5,
        backgroundColor: colors.contrast.surface,
        borderBottom: `1px solid ${colors.contrast.border}`,
        flexShrink: 0,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {logo && <Box sx={{ display: 'inline-flex' }}>{logo}</Box>}
        {logo && (
          <Box sx={{ width: '1px', height: 28, backgroundColor: colors.contrast.border }} />
        )}
        <Box>
          <Box
            component="h1"
            sx={{
              m: 0,
              fontFamily: '"Red Hat Display", sans-serif',
              fontWeight: 900,
              fontSize: 16,
              letterSpacing: '0.04em',
              color: colors.contrast.text.primary,
            }}
          >
            {title}
          </Box>
          {subtitle && (
            <Box
              sx={{
                fontFamily: '"Necto Mono", monospace',
                fontSize: 10,
                color: colors.contrast.text.disabled,
                mt: 0.125,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {subtitle}
            </Box>
          )}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
        {badges}
        {actions}
      </Box>
    </Box>
  );
};

export default DashboardTopBar;
