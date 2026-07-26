import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface LogoProps extends Omit<BoxProps, 'component'> {
    variant?: 'desktop' | 'mobile';
    version?: 'v1' | 'v2' | 'v3' | 'isotipo';
    colorVariant?: 'azul' | 'crema' | 'gris' | 'naranja' | 'negro' | 'auto';
    size?: 'small' | 'medium' | 'large';
    light?: boolean;
    onClick?: () => void;
}
declare const Logo: React.FC<LogoProps>;
export default Logo;
