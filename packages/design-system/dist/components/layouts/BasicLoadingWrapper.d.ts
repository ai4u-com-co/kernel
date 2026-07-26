import { default as React, ReactNode } from 'react';
interface BasicLoadingWrapperProps {
    children?: ReactNode;
}
/**
 * Wrapper básico que solo renderiza los hijos sin lógica de carga
 * Simplificado para evitar problemas de renderizado infinito
 */
declare const BasicLoadingWrapper: ({ children }: BasicLoadingWrapperProps) => React.JSX.Element;
export default BasicLoadingWrapper;
