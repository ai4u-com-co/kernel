import React from 'react';
import { Box, BoxProps, useTheme } from '@mui/material';

interface LogoProps extends Omit<BoxProps, 'component'> {
  variant?: 'desktop' | 'mobile'; // Backwards compatibility
  version?: 'v1' | 'v2' | 'v3' | 'isotipo';
  colorVariant?: 'azul' | 'crema' | 'gris' | 'naranja' | 'negro' | 'auto';
  size?: 'small' | 'medium' | 'large';
  light?: boolean; // Backwards compatibility
  onClick?: () => void;
}

const getLogoSrc = (
  version: 'v1' | 'v2' | 'v3' | 'isotipo',
  colorVariant: 'azul' | 'crema' | 'gris' | 'naranja' | 'negro' | 'auto',
  isDarkTheme: boolean,
  lightProp: boolean
) => {
  // Determinar color automático
  let color = colorVariant;
  if (color === 'auto') {
    const preferLight = lightProp || isDarkTheme;
    color = preferLight ? 'crema' : 'negro';
  }

  const colorMap = {
    azul: 'Azul',
    crema: 'Crema',
    gris: 'Gris',
    naranja: 'Naranja',
    negro: 'Negro',
  };
  const resolvedColor = colorMap[color] || 'Negro';

  if (version === 'isotipo') {
    return `/assets/images/Isotipo ${resolvedColor}.png`;
  }

  const versionMap = {
    v1: 'Logo V1',
    v2: 'Logo V2',
    v3: 'Logo V3',
  };
  const resolvedVersion = versionMap[version] || 'Logo V2';

  // Manejar el caso especial con espacio de 'Logo V2 - Crema .png'
  if (resolvedVersion === 'Logo V2' && resolvedColor === 'Crema') {
    return `/assets/images/Logo V2 - Crema .png`;
  }

  return `/assets/images/${resolvedVersion} - ${resolvedColor}.png`;
};

const Logo: React.FC<LogoProps> = ({ 
  variant,
  version = 'v2',
  colorVariant = 'auto',
  size,
  light = false,
  onClick,
  sx,
  ...props 
}: LogoProps) => {
  const theme = useTheme();
  const isDarkTheme = theme.palette.mode === 'dark';

  const srcPath = getLogoSrc(version, colorVariant, isDarkTheme, light);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Comportamiento por defecto: scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Mapeo de tamaño
  let height = 40;
  const resolvedSize = size || (variant === 'mobile' ? 'small' : 'medium');
  
  if (version === 'isotipo') {
    if (resolvedSize === 'small') height = 24;
    else if (resolvedSize === 'large') height = 48;
    else height = 32;
  } else {
    if (resolvedSize === 'small') height = 30;
    else if (resolvedSize === 'large') height = 60;
    else height = 40;
  }

  return (
    <Box
      component="img"
      src={srcPath}
      alt={`AI4U ${version}`}
      onClick={handleClick}
      sx={{
        height,
        width: 'auto',
        cursor: 'pointer',
        transition: 'transform 0.2s steps(4, end)',
        '&:hover': {
          transform: 'scale(1.03)'
        },
        ...sx
      }}
      {...props}
    />
  );
};

export default Logo;