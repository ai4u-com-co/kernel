import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface BrandingProps {
  /** Slot para el logo (img o componente). */
  logo?: ReactNode;
  /** Título principal (uppercase, peso heavy). */
  title: string;
  /** Subtítulo (mono, uppercase, color secundario). */
  subtitle?: string;
  /** Alineación. Default `left`. */
  align?: 'left' | 'center';
  /** Tema de superficie. Default `dark`. */
  variant?: 'dark' | 'light';
  /** Color del título. Override del variant. */
  titleColor?: string;
  /** Color del subtítulo. Override del variant. */
  subtitleColor?: string;
}

/**
 * Branding — bloque de identidad reusable (logo + título + subtítulo).
 *
 * Se usa como header de DashboardSidebar, DashboardTopBar y pantallas de
 * auth/landing. Mantiene la jerarquía tipográfica del DS sin replicar
 * estilos por componente.
 *
 * @example
 * <Branding
 *   logo={<img src="/logo.svg" />}
 *   title="Mission Control"
 *   subtitle="Ecosistema IA · v1.0"
 * />
 */
const Branding: React.FC<BrandingProps> = ({
  logo,
  title,
  subtitle,
  align = 'left',
  variant = 'dark',
  titleColor,
  subtitleColor,
}) => {
  const resolvedTitle = titleColor ?? (variant === 'dark' ? '#F1F5F9' : '#0F172A');
  const resolvedSubtitle = subtitleColor ?? (variant === 'dark' ? '#64748B' : '#94A3B8');

  return (
    <Box sx={{ textAlign: align, display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', gap: 0 }}>
      {logo && <Box sx={{ mb: 1.75, display: 'inline-flex' }}>{logo}</Box>}
      <Box
        sx={{
          fontFamily: '"Red Hat Display", sans-serif',
          fontWeight: 900,
          fontSize: 13,
          letterSpacing: '0.22em',
          color: resolvedTitle,
          textTransform: 'uppercase',
          lineHeight: 1,
        }}
      >
        {title}
      </Box>
      {subtitle && (
        <Box
          sx={{
            fontFamily: '"Necto Mono", monospace',
            fontSize: 9,
            color: resolvedSubtitle,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            mt: 0.5,
          }}
        >
          {subtitle}
        </Box>
      )}
    </Box>
  );
};

export default Branding;
