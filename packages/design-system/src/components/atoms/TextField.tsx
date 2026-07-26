import React, { InputHTMLAttributes } from 'react';
import { Box, styled } from '@mui/material';
import { useColors } from '../../hooks';
import { TYPOGRAPHY_TOKENS } from '../../tokens/typography';
import { SPACING_TOKENS } from '../../tokens/spacing';
import { BORDER_TOKENS } from '../../tokens/theme';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'ref'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  sx?: any;
}

const TEXT_FIELD_SIZE_MAP: Record<NonNullable<TextFieldProps['size']>, number> = {
  small: SPACING_TOKENS.sizes.inputSm,
  medium: SPACING_TOKENS.sizes.inputMd,
  large: SPACING_TOKENS.sizes.inputLg,
};

const StyledInput = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fieldColors' && prop !== 'resolvedHeight' && prop !== 'error',
})<{
  fieldColors: { background: string; text: string; border: string; borderFocus: string; placeholder: string };
  resolvedHeight: number;
  error?: boolean;
}>(({ fieldColors, resolvedHeight, error }) => ({
  width: '100%',
  boxSizing: 'border-box',
  height: resolvedHeight,
  padding: '0 14px',
  borderRadius: BORDER_TOKENS.radius.sm,
  border: `1px solid ${error ? '#ef4444' : fieldColors.border}`,
  backgroundColor: fieldColors.background,
  color: fieldColors.text,
  fontFamily: TYPOGRAPHY_TOKENS.fontFamily.primary,
  fontSize: TYPOGRAPHY_TOKENS.fontSize.sm,
  outline: 'none',
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

// Input de una línea, tamaños táctiles (SPACING_TOKENS.sizes.inputSm/Md/Lg —
// default medium=48px cumple el mínimo de 44px), colores conscientes de la
// superficie/tema actual vía useColors().
export const TextField = ({ size = 'medium', error = false, sx, ...props }: TextFieldProps) => {
  const { contrast } = useColors();
  const fieldColors = {
    background: contrast.surface,
    text: contrast.text.primary,
    border: contrast.border,
    borderFocus: contrast.text.secondary,
    placeholder: contrast.text.disabled,
  };

  return (
    <StyledInput
      component="input"
      fieldColors={fieldColors}
      resolvedHeight={TEXT_FIELD_SIZE_MAP[size]}
      error={error}
      sx={sx}
      {...(props as any)}
    />
  );
};

export default TextField;
