import { default as React } from 'react';
interface NavigationDotProps {
    variant?: 'active' | 'inactive' | 'separator';
    size?: 'small' | 'medium';
    className?: string;
}
/**
 * NavigationDot - Indicador geométrico minimalista para navegación
 *
 * Componente sutil para separar visualmente enlaces relacionados
 * Sigue la filosofía de geometric icons del sistema AI4U
 *
 * @example
 * <NavigationDot variant="active" size="medium" />
 * <NavigationDot variant="separator" size="small" />
 */
declare const NavigationDot: React.FC<NavigationDotProps>;
export default NavigationDot;
