import React from 'react';
import { Box } from '@mui/material';
import Modal from './Modal';

export interface ImageLightboxProps {
  src: string;
  alt?: string;
  open: boolean;
  onClose: () => void;
}

// Preview de imagen a pantalla completa — construida sobre Modal. Pensada
// para reemplazar el patrón de "adjunto = link que abre pestaña nueva" en
// consumidores como el flujo de tickets de Mission Control.
export const ImageLightbox = ({ src, alt = '', open, onClose }: ImageLightboxProps) => {
  return (
    <Modal open={open} onClose={onClose} maxWidth="90vw" sx={{ backgroundColor: 'transparent', overflow: 'visible' }}>
      <Box
        component="img"
        src={src}
        alt={alt}
        sx={{
          display: 'block',
          maxWidth: '100%',
          maxHeight: '85vh',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: '8px',
        }}
      />
    </Modal>
  );
};

export default ImageLightbox;
