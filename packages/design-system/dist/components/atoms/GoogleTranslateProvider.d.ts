import { default as React } from 'react';
declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}
/**
 * Proveedor único del contenedor y script de Google Translate.
 * Debe montarse una sola vez en la app (p. ej. en Layout).
 */
declare const GoogleTranslateProvider: React.FC;
export default GoogleTranslateProvider;
