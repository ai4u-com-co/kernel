import { default as React, ReactNode } from 'react';
interface AuthCardProps {
    /** Slot para branding (logo + título + subtítulo). Renderizado encima del card. */
    branding?: ReactNode;
    /** Etiqueta superior del card (mono uppercase, prefijo ◈). */
    label?: string;
    /** Placeholder del input. */
    placeholder?: string;
    /** Tipo de input. Default `password`. */
    inputType?: 'password' | 'text';
    /** Texto del botón cuando idle. Default `Entrar`. */
    submitLabel?: string;
    /** Texto del botón cuando loading. Default `Verificando…`. */
    loadingLabel?: string;
    /** Color de acento (botón + focus). Default Tamaprint primary. */
    accentColor?: string;
    /** Slot bajo el card (footer/legal/atribución). */
    footer?: ReactNode;
    /** Submit handler. Recibe el valor del input y debe devolver Promise<{ ok, error? }>. */
    onSubmit: (value: string) => Promise<{
        ok: boolean;
        error?: string;
    }>;
}
/**
 * AuthCard — formulario de autenticación brutalist para dashboards internos.
 *
 * Estructura: branding opcional → card oscuro con label + input + error + submit
 * → footer opcional. Maneja loading, error y shake animation internamente.
 *
 * @example
 * <AuthCard
 *   branding={<Branding logo={...} title="Mission Control" />}
 *   label="Acceso restringido"
 *   onSubmit={async (pw) => { ... }}
 * />
 */
declare const AuthCard: React.FC<AuthCardProps>;
export default AuthCard;
