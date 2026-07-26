import React, { ElementType, ReactNode } from 'react';
import { Link } from '@mui/material';
import { useColors } from '../../hooks';

export interface ContextualLinkProps {
  /** URL de destino. */
  href: string;
  variant?: 'subtle' | 'accent' | 'inline';
  children?: ReactNode;
  className?: string;
  ariaLabel?: string;
  /**
   * Componente de enlace del framework (ej: `Link` de next/link, `NavLink` de react-router-dom).
   * Si se omite, usa `<a>` nativo.
   *
   * @example
   * import NextLink from 'next/link';
   * <ContextualLink href="/servicios" LinkComponent={NextLink}>...</ContextualLink>
   */
  LinkComponent?: ElementType;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const ContextualLink: React.FC<ContextualLinkProps> = ({
  href,
  variant = 'subtle',
  children,
  className,
  ariaLabel,
  LinkComponent,
  onClick,
}) => {
  const colors = useColors();

  const getVariantStyles = () => {
    switch (variant) {
      case 'accent':
        return {
          color: colors.palette.accent,
          fontWeight: 400,
          textDecoration: 'none',
          borderBottom: `1px solid ${colors.palette.accent}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: colors.palette.success,
            borderBottomColor: colors.palette.success,
            transform: 'translateY(-1px)',
          },
        };
      case 'inline':
        return {
          color: 'inherit',
          textDecoration: 'underline',
          textDecorationColor: colors.contrast.text.secondary,
          transition: 'all 0.3s ease',
          '&:hover': {
            color: colors.palette.accent,
            textDecorationColor: colors.palette.accent,
          },
        };
      case 'subtle':
      default:
        return {
          color: colors.contrast.text.secondary,
          textDecoration: 'none',
          borderBottom: '1px solid transparent',
          transition: 'all 0.3s ease',
          '&:hover': {
            color: colors.palette.accent,
            borderBottomColor: colors.palette.accent,
          },
        };
    }
  };

  return (
    <Link
      component={LinkComponent ?? 'a'}
      href={href}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      sx={getVariantStyles()}
    >
      {children}
    </Link>
  );
};

export default ContextualLink;