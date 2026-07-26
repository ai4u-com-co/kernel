import { default as React, ReactNode } from 'react';
export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
    maxWidth?: number | string;
    sx?: any;
}
export declare const Modal: ({ open, onClose, children, maxWidth, sx }: ModalProps) => React.JSX.Element | null;
export default Modal;
