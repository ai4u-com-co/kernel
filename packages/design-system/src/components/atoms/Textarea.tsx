import React, { TextareaHTMLAttributes, useCallback } from 'react';
import { Box, styled } from '@mui/material';
import { useColors } from '../../hooks';
import { TYPOGRAPHY_TOKENS } from '../../tokens/typography';
import { BORDER_TOKENS } from '../../tokens/theme';

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'ref'> {
  error?: boolean;
  // Al enfocar, hace scroll del campo a la vista más cercana ("nearest") —
  // resuelve, una sola vez para cualquier consumidor, el problema de que el
  // teclado virtual mobile tape el campo enfocado. Default true.
  scrollIntoViewOnFocus?: boolean;
  sx?: any;
}

const StyledTextarea = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fieldColors' && prop !== 'error',
})<{
  fieldColors: { background: string; text: string; border: string; borderFocus: string; placeholder: string };
  error?: boolean;
}>(({ fieldColors, error }) => ({
  width: '100%',
  boxSizing: 'border-box',
  padding: '10px 14px',
  borderRadius: BORDER_TOKENS.radius.sm,
  border: `1px solid ${error ? '#ef4444' : fieldColors.border}`,
  backgroundColor: fieldColors.background,
  color: fieldColors.text,
  fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
  fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
  lineHeight: TYPOGRAPHY_TOKENS.lineHeight.normal,
  outline: 'none',
  resize: 'vertical',
  transition: 'border-color 150ms ease',
  '&:focus': {
    borderColor: error ? '#ef4444' : fieldColors.borderFocus,
  },
  '&::placeholder': {
    color: fieldColors.placeholder,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

export const Textarea = ({
  error = false,
  scrollIntoViewOnFocus = true,
  sx,
  onFocus,
  rows = 4,
  ...props
}: TextareaProps) => {
  const { contrast } = useColors();
  const fieldColors = {
    background: contrast.surface,
    text: contrast.text.primary,
    border: contrast.border,
    borderFocus: contrast.text.secondary,
    placeholder: contrast.text.disabled,
  };

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLTextAreaElement>) => {
      if (scrollIntoViewOnFocus) {
        e.currentTarget.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
      onFocus?.(e);
    },
    [scrollIntoViewOnFocus, onFocus]
  );

  return (
    <StyledTextarea
      component="textarea"
      rows={rows}
      fieldColors={fieldColors}
      error={error}
      onFocus={handleFocus}
      sx={sx}
      {...(props as any)}
    />
  );
};

export default Textarea;
