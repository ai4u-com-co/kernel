import React, { ReactNode, useEffect } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { useColors } from '../../hooks';
import { Z_INDEX_TOKENS, BORDER_TOKENS } from '../../tokens/theme';
import Button from '../atoms/Button';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: number | string;
  sx?: any;
}

// Overlay genérico: fullscreen en mobile, diálogo centrado en desktop.
// Cierra con ESC y con click fuera del contenido. El botón de cerrar ya
// cumple el mínimo de touch target (Button iconOnly = SPACING_TOKENS.sizes.buttonMd).
export const Modal = ({ open, onClose, children, maxWidth = 560, sx }: ModalProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { contrast } = useColors();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Box
      onClick={onClose}
      data-testid="modal-overlay"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: Z_INDEX_TOKENS.modal,
        backgroundColor: 'rgba(0,0,0,0.72)',
        display: 'flex',
        alignItems: isMobile ? 'flex-end' : 'center',
        justifyContent: 'center',
        padding: isMobile ? 0 : '24px',
      }}
    >
      <Box
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
        sx={{
          position: 'relative',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '100%' : maxWidth,
          maxHeight: isMobile ? '90vh' : '90vh',
          backgroundColor: contrast.surface,
          color: contrast.text.primary,
          borderRadius: isMobile ? `${BORDER_TOKENS.radius.md} ${BORDER_TOKENS.radius.md} 0 0` : BORDER_TOKENS.radius.md,
          overflow: 'auto',
          ...sx,
        }}
      >
        <Button
          variant="dashboard"
          iconOnly
          onClick={onClose}
          aria-label="Cerrar"
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 1,
            backgroundColor: 'rgba(0,0,0,0.4)',
            color: '#fff',
            border: 'none',
            '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' },
          }}
        >
          ✕
        </Button>
        {children}
      </Box>
    </Box>
  );
};

export default Modal;
