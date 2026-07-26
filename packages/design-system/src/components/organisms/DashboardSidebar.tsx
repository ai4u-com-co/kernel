import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import { AI4U_PALETTE } from '../../tokens/palette';
import StatusDot, { type TelemetryStatus } from '../atoms/StatusDot';
import DashboardIcon, { type DashboardIconId } from '../atoms/DashboardIcon';

export interface SidebarNavItem {
  id: string;
  name: string;
  href: string;
  icon: DashboardIconId;
  hint?: string;             // texto chico bajo el nombre (ej: hostname)
  external?: boolean;        // target=_blank
  status?: TelemetryStatus;  // dot lateral
}

export interface SidebarGroup {
  id: string;
  label: string;
  items: SidebarNavItem[];
}

export interface SidebarStat {
  label: string;
  value: number | string;
  color?: string;            // default: AI4U_PALETTE.moderateBlue
}

interface DashboardSidebarProps {
  /** Header de marca (logo + titulo + subtitulo). */
  branding: {
    logo?: ReactNode;
    title: string;
    subtitle?: string;
  };
  /** Badge de estado del sistema (chip con dot). */
  statusBadge?: {
    status: TelemetryStatus;
    label: string;
  };
  /** Grupos de navegación. */
  groups: SidebarGroup[];
  /** Stats compactas (grilla 2 columnas). */
  stats?: SidebarStat[];
  /** Reloj / footer textual. */
  clock?: {
    time: string;            // string formateado
    date?: string;           // string formateado
  };
  /** Firma de "powered by". */
  signature?: {
    logo?: ReactNode;
    caption: string;
    label: string;
    accentColor?: string;    // default hotOrange
  };
  /** Width en px. Default 252. */
  width?: number;
}

/**
 * DashboardSidebar — sidebar oscuro de navegación para dashboards de monitoreo.
 *
 * Estructura: branding · status badge · grupos de nav (con dot por item) ·
 * stats grid · clock · signature.
 *
 * Superficie oscura fija (AI4U_PALETTE.erieBlack), independiente del tema
 * global del dashboard.
 *
 * @example
 * <DashboardSidebar
 *   branding={{ logo: <img src="/logo.svg" />, title: "Mission Control" }}
 *   groups={[{ id: "prod", label: "Producción", items: [...] }]}
 * />
 */
const DashboardSidebar: React.FC<DashboardSidebarProps> = ({
  branding,
  statusBadge,
  groups,
  stats,
  clock,
  signature,
  width = 252,
}) => {
  const surfaceBg = AI4U_PALETTE.erieBlack;
  const surfaceBorder = 'rgba(255,255,255,0.06)';
  const textPrimary = AI4U_PALETTE.white;
  const textSecondary = 'rgba(255,255,255,0.45)';

  return (
    <Box
      component="aside"
      sx={{
        width,
        flexShrink: 0,
        backgroundColor: surfaceBg,
        borderRight: `1px solid ${surfaceBorder}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        position: 'sticky',
        top: 0,
        overflowY: 'auto',
        color: textPrimary,
      }}
    >
      {/* Branding */}
      <Box sx={{ p: '22px 20px 18px', borderBottom: `1px solid ${surfaceBorder}` }}>
        {branding.logo && <Box sx={{ mb: 1.75 }}>{branding.logo}</Box>}
        <Box
          sx={{
            fontWeight: 900,
            fontSize: 12,
            letterSpacing: '0.2em',
            color: textPrimary,
            textTransform: 'uppercase',
            lineHeight: 1,
          }}
        >
          {branding.title}
        </Box>
        {branding.subtitle && (
          <Box
            sx={{
              fontFamily: '"Necto Mono", monospace',
              fontSize: 9,
              color: textSecondary,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              mt: 0.5,
            }}
          >
            {branding.subtitle}
          </Box>
        )}
      </Box>

      {/* Status badge */}
      {statusBadge && (
        <Box sx={{ p: '10px 20px', borderBottom: `1px solid ${surfaceBorder}` }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.875,
              px: 1.375,
              py: 0.625,
              backgroundColor: `${AI4U_PALETTE.telemetry[statusBadge.status]}1a`,
              border: `1px solid ${AI4U_PALETTE.telemetry[statusBadge.status]}33`,
            }}
          >
            <StatusDot status={statusBadge.status} size={6} />
            <Box
              component="span"
              sx={{
                fontFamily: '"Necto Mono", monospace',
                fontSize: 9,
                color: AI4U_PALETTE.telemetry[statusBadge.status],
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              {statusBadge.label}
            </Box>
          </Box>
        </Box>
      )}

      {/* Navigation */}
      <Box component="nav" sx={{ flex: 1, py: 1.75 }}>
        {groups.map((group) => (
          <Box key={group.id} sx={{ mb: 2.25 }}>
            <Box
              sx={{
                px: '20px',
                pb: 0.75,
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                fontWeight: 700,
                color: textSecondary,
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
              }}
            >
              ◈ {group.label}
            </Box>
            {group.items.map((item) => (
              <Box
                key={item.id}
                component="a"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.25,
                  px: '20px',
                  py: 0.875,
                  textDecoration: 'none',
                  borderLeft: '2px solid transparent',
                  transition: 'all 0.15s',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderLeftColor: AI4U_PALETTE.hotOrange,
                  },
                }}
              >
                <DashboardIcon
                  id={item.icon}
                  size={14}
                  color="rgba(255,255,255,0.4)"
                  strokeWidth={1.6}
                />
                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Box
                    sx={{
                      fontSize: 11.5,
                      fontWeight: 600,
                      color: textPrimary,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.name}
                  </Box>
                  {item.hint && (
                    <Box
                      sx={{
                        fontFamily: '"Necto Mono", monospace',
                        fontSize: 8.5,
                        color: AI4U_PALETTE.moderateBlue,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        mt: '1px',
                        opacity: 0.8,
                      }}
                    >
                      {item.hint}
                    </Box>
                  )}
                </Box>
                {item.status && <StatusDot status={item.status} size={6} />}
              </Box>
            ))}
          </Box>
        ))}
      </Box>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <Box
          sx={{
            borderTop: `1px solid ${surfaceBorder}`,
            p: '14px 20px',
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(stats.length, 2)}, 1fr)`,
            gap: 1,
          }}
        >
          {stats.map((s) => (
            <Box
              key={s.label}
              sx={{
                textAlign: 'center',
                py: 1.25,
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <Box
                sx={{
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 22,
                  fontWeight: 700,
                  color: s.color ?? AI4U_PALETTE.moderateBlue,
                  lineHeight: 1,
                }}
              >
                {s.value}
              </Box>
              <Box
                sx={{
                  fontFamily: '"Necto Mono", monospace',
                  fontSize: 8,
                  color: textSecondary,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  mt: 0.375,
                }}
              >
                {s.label}
              </Box>
            </Box>
          ))}
        </Box>
      )}

      {/* Clock */}
      {clock && (
        <Box
          sx={{
            borderTop: `1px solid ${surfaceBorder}`,
            p: '12px 20px',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              fontFamily: '"Necto Mono", monospace',
              fontSize: 19,
              fontWeight: 700,
              color: textPrimary,
              letterSpacing: '0.05em',
              lineHeight: 1,
            }}
          >
            {clock.time}
          </Box>
          {clock.date && (
            <Box
              sx={{
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                color: textSecondary,
                mt: 0.5,
                letterSpacing: '0.1em',
              }}
            >
              {clock.date}
            </Box>
          )}
        </Box>
      )}

      {/* Signature */}
      {signature && (
        <Box
          sx={{
            borderTop: `1px solid ${surfaceBorder}`,
            p: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          {signature.logo}
          <Box>
            <Box
              sx={{
                fontFamily: '"Necto Mono", monospace',
                fontSize: 8.5,
                color: textSecondary,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {signature.caption}
            </Box>
            <Box
              sx={{
                fontFamily: '"Necto Mono", monospace',
                fontSize: 11,
                fontWeight: 700,
                color: signature.accentColor ?? AI4U_PALETTE.hotOrange,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              {signature.label}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DashboardSidebar;
