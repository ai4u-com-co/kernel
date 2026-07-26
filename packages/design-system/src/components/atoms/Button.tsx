import React, { ReactNode } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, styled, Box } from '@mui/material';
import { useColors } from '../../hooks';
import { AI4U_PALETTE } from '../../tokens/palette';
import { TEXT_VARIANTS, TYPOGRAPHY_TOKENS } from '../../tokens/typography';
import { SPACING_TOKENS } from '../../tokens/spacing';
import { BORDER_TOKENS } from '../../tokens/theme';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text' | 'minimal' | 'industrial' | 'dashboard';
  size?: 'small' | 'medium' | 'large';
  // Fuerza un botón cuadrado (minWidth = minHeight, sin padding) — para íconos
  // solos (mic, adjuntar, cerrar). Reemplaza el patrón de overridear `sx`
  // manualmente que hoy usan los consumidores (ej. TopNav.tsx).
  iconOnly?: boolean;
  children?: ReactNode;
  label?: string; // Metadata label like "ACTION" or "PRESS"
  href?: string;
  target?: string;
  component?: any;
  to?: any;
  className?: string;
  sx?: any;
}

interface DashboardColors {
  background: string;
  text: string;
  border: string;
  hoverBg: string;
}

const BUTTON_SIZE_MAP: Record<NonNullable<ButtonProps['size']>, number> = {
  small: SPACING_TOKENS.sizes.buttonSm,
  medium: SPACING_TOKENS.sizes.buttonMd,
  large: SPACING_TOKENS.sizes.buttonLg,
};

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) =>
    prop !== 'customVariant' && prop !== 'customSize' && prop !== 'iconOnly' && prop !== 'dashboardColors',
})<{
  customVariant?: ButtonProps['variant'];
  customSize?: ButtonProps['size'];
  iconOnly?: boolean;
  dashboardColors?: DashboardColors;
}>(({ theme, customVariant, customSize, iconOnly, dashboardColors }) => {
  const isLight = theme.palette.mode === 'light';
  const resolvedHeight = BUTTON_SIZE_MAP[customSize ?? 'medium'];

  const baseStyles = {
    borderRadius: 0, // Heavy Industrial Sharp Edges
    fontWeight: 700,
    letterSpacing: '0.15em',
    fontSize: '0.875rem',
    fontFamily: '"Red Hat Display", sans-serif',
    transition: 'all 0.2s steps(4, end)', // Industrial "Snap" transition
    border: 'none',
    padding: '12px 24px',
    boxShadow: 'none',
    position: 'relative' as const,
    overflow: 'hidden',
  };

  let variantStyles: Record<string, unknown> = {};

  switch (customVariant) {
    case 'primary':
      variantStyles = {
        backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.gray[800] : AI4U_PALETTE.gray[200],
          transform: 'translate(-2px, -2px)',
          boxShadow: `4px 4px 0px 0px ${isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}`,
        },
      };
      break;

    case 'industrial':
      variantStyles = {
        backgroundColor: AI4U_PALETTE.accentColors.mint, // Safety Green
        color: AI4U_PALETTE.black,
        border: `2px solid ${AI4U_PALETTE.black}`,
        '&:hover': {
          backgroundColor: AI4U_PALETTE.accentColors.orange, // Warning Orange
          transform: 'translate(-4px, -4px)',
          boxShadow: `8px 8px 0px 0px ${AI4U_PALETTE.black}`,
        },
      };
      break;

    case 'outline':
      variantStyles = {
        backgroundColor: 'transparent',
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        border: `2px solid ${isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white}`,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
          color: isLight ? AI4U_PALETTE.white : AI4U_PALETTE.black,
        },
      };
      break;

    case 'minimal':
      variantStyles = {
        backgroundColor: isLight ? AI4U_PALETTE.gray[100] : AI4U_PALETTE.gray[900],
        color: isLight ? AI4U_PALETTE.black : AI4U_PALETTE.white,
        '&:hover': {
          backgroundColor: isLight ? AI4U_PALETTE.gray[200] : AI4U_PALETTE.gray[800],
        },
      };
      break;

    // Variant para consumidores tipo dashboard (Mission Control): esquinas
    // suaves y colores conscientes de la superficie/tema actual (via
    // useColors/contrast) en vez del blanco/negro puro brutalista de las
    // demás variantes, pensadas para el sitio de marketing.
    case 'dashboard':
      variantStyles = {
        borderRadius: BORDER_TOKENS.radius.sm, // 8px — mismo radio que ya usa Mission Control a mano
        fontWeight: TYPOGRAPHY_TOKENS.fontWeight.semiBold,
        letterSpacing: TYPOGRAPHY_TOKENS.letterSpacing.normal,
        fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
        textTransform: 'none',
        backgroundColor: dashboardColors?.background ?? 'transparent',
        color: dashboardColors?.text ?? 'inherit',
        border: dashboardColors ? `1px solid ${dashboardColors.border}` : 'none',
        minHeight: resolvedHeight,
        '&:hover': {
          backgroundColor: dashboardColors?.hoverBg ?? 'rgba(128,128,128,0.12)',
          transform: 'none',
          boxShadow: 'none',
        },
      };
      break;

    default:
      variantStyles = {};
  }

  // `iconOnly` es opt-in y nuevo — no afecta a ningún consumidor existente
  // que no lo pase explícitamente. Se aplica al final para ganarle a
  // cualquier padding/ancho de la variante.
  const iconOnlyStyles = iconOnly
    ? { minWidth: resolvedHeight, width: resolvedHeight, minHeight: resolvedHeight, padding: 0 }
    : {};

  return { ...baseStyles, ...variantStyles, ...iconOnlyStyles };
});

const LabelText = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 2,
  right: 6,
  ...TEXT_VARIANTS.label.secondary,
  fontSize: '0.65rem',
  pointerEvents: 'none',
}));

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  iconOnly = false,
  label,
  className,
  sx,
  ...props
}: ButtonProps) => {
  const { contrast, helpers } = useColors();
  const dashboardColors: DashboardColors | undefined =
    variant === 'dashboard'
      ? {
          background: contrast.surface,
          text: contrast.text.primary,
          border: contrast.border,
          hoverBg: helpers.state.hover,
        }
      : undefined;

  return (
    <StyledButton
      customVariant={variant}
      customSize={size}
      size={size}
      iconOnly={iconOnly}
      dashboardColors={dashboardColors}
      className={className}
      sx={sx}
      {...props}
    >
      {label && <LabelText>{label}</LabelText>}
      {children}
    </StyledButton>
  );
};

export default Button;
