import { ReactNode } from 'react';
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: number | string;
    sx?: any;
}
export declare const Modal: ({ open, onClose, children, maxWidth, sx }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
