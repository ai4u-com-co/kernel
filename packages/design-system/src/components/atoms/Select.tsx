import React, { SelectHTMLAttributes } from 'react';
import { Box, styled } from '@mui/material';
import { useColors } from '../../hooks';
import { TYPOGRAPHY_TOKENS } from '../../tokens/typography';
import { SPACING_TOKENS } from '../../tokens/spacing';
import { BORDER_TOKENS } from '../../tokens/theme';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'ref'> {
  size?: 'small' | 'medium' | 'large';
  error?: boolean;
  children?: React.ReactNode;
  sx?: any;
}

const SELECT_SIZE_MAP: Record<NonNullable<SelectProps['size']>, number> = {
  small: SPACING_TOKENS.sizes.inputSm,
  medium: SPACING_TOKENS.sizes.inputMd,
  large: SPACING_TOKENS.sizes.inputLg,
};

const StyledSelect = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'fieldColors' && prop !== 'resolvedHeight' && prop !== 'error',
})<{
  fieldColors: { background: string; text: string; border: string; borderFocus: string };
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
  cursor: 'pointer',
  appearance: 'auto', // picker nativo del SO — mejor UX mobile que un dropdown custom
  transition: 'border-color 150ms ease',
  '&:focus': {
    borderColor: error ? '#ef4444' : fieldColors.borderFocus,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

// Wrapper delgado sobre <select> nativo — se mantiene el picker nativo del
// SO (correcto para mobile) en vez de reconstruir un dropdown custom.
export const Select = ({ size = 'medium', error = false, sx, children, ...props }: SelectProps) => {
  const { contrast } = useColors();
  const fieldColors = {
    background: contrast.surface,
    text: contrast.text.primary,
    border: contrast.border,
    borderFocus: contrast.text.secondary,
  };

  return (
    <StyledSelect
      component="select"
      fieldColors={fieldColors}
      resolvedHeight={SELECT_SIZE_MAP[size]}
      error={error}
      sx={sx}
      {...(props as any)}
    >
      {children}
    </StyledSelect>
  );
};

export default Select;
