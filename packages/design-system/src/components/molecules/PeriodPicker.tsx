import React from 'react';
import { Box } from '@mui/material';
import { useColors } from '../../hooks';
import { BORDER_TOKENS } from '../../tokens/theme';
import { TextField } from '../atoms/TextField';

export interface PeriodPreset {
  id: string;
  label: string;
  /** Rango que resuelve este preset. Puede ser estático o (para presets relativos a "hoy", como "mes actual") una función evaluada al hacer click. */
  range: { from: string; to: string } | (() => { from: string; to: string });
}

export interface PeriodPickerProps {
  presets: PeriodPreset[];
  activePresetId: string;
  onPresetChange: (id: string) => void;
  /** ISO YYYY-MM-DD */
  fromDate: string;
  /** ISO YYYY-MM-DD */
  toDate: string;
  onFromChange: (v: string) => void;
  onToChange: (v: string) => void;
  minDate?: string;
  maxDate?: string;
  /** Muestra los dos inputs de rango custom. Default `true`. */
  showCustomRange?: boolean;
  disabled?: boolean;
}

/**
 * Pills de preset + (opcional) dos inputs de fecha para rango custom. No
 * conoce semántica de negocio ("mes actual", anclas de fecha, etc.) — eso
 * vive en `presets` (definidos por quien lo consume, ver `dateBogota.ts` para
 * las utilidades ancladas a America/Bogota que arman esos rangos). Al hacer
 * click en un preset, resuelve `preset.range` y emite `fromDate`/`toDate`
 * (además de `activePresetId`) — así el consumidor no repite esa lógica.
 * Editar los inputs de rango custom solo emite `fromDate`/`toDate`, sin tocar
 * `activePresetId` (el consumidor decide si eso implica "desactivar" el
 * preset activo).
 */
export const PeriodPicker = ({
  presets,
  activePresetId,
  onPresetChange,
  fromDate,
  toDate,
  onFromChange,
  onToChange,
  minDate,
  maxDate,
  showCustomRange = true,
  disabled = false,
}: PeriodPickerProps) => {
  const { contrast } = useColors();

  const handlePresetClick = (preset: PeriodPreset) => {
    if (disabled) return;
    const resolved = typeof preset.range === 'function' ? preset.range() : preset.range;
    onFromChange(resolved.from);
    onToChange(resolved.to);
    onPresetChange(preset.id);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '4px',
          background: contrast.surface,
          borderRadius: BORDER_TOKENS.radius.full,
          p: '4px',
          border: `1px solid ${contrast.border}`,
        }}
      >
        {presets.map((preset) => {
          const active = preset.id === activePresetId;
          return (
            <Box
              key={preset.id}
              component="button"
              type="button"
              disabled={disabled}
              onClick={() => handlePresetClick(preset)}
              sx={{
                background: active ? contrast.text.primary : 'transparent',
                border: 'none',
                borderRadius: BORDER_TOKENS.radius.full,
                color: active ? contrast.background : contrast.text.secondary,
                cursor: disabled ? 'not-allowed' : 'pointer',
                opacity: disabled ? 0.5 : 1,
                fontFamily: 'inherit',
                fontSize: 12,
                fontWeight: active ? 700 : 500,
                letterSpacing: '0.04em',
                px: { xs: '14px', sm: '16px' },
                py: { xs: '11px', sm: '7px' },
                // >=44px de alto en xs para cumplir el mínimo de área táctil.
                minHeight: { xs: 44, sm: 'auto' },
                transition: 'all 0.15s',
                '&:hover': disabled || active ? {} : { color: contrast.text.primary },
              }}
            >
              {preset.label}
            </Box>
          );
        })}
      </Box>

      {showCustomRange && (
        // flexWrap + flex en los inputs: en móviles muy angostos los dos date
        // pickers se apilan en vez de desbordar (el date input nativo de iOS
        // no baja de ~155px de ancho).
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <TextField
            type="date"
            value={fromDate}
            min={minDate}
            max={maxDate}
            disabled={disabled}
            onChange={(e) => onFromChange(e.target.value)}
            sx={{ flex: '1 1 130px', minWidth: 0 }}
          />
          <Box component="span" sx={{ fontSize: 12, color: contrast.text.secondary }}>
            a
          </Box>
          <TextField
            type="date"
            value={toDate}
            min={minDate}
            max={maxDate}
            disabled={disabled}
            onChange={(e) => onToChange(e.target.value)}
            sx={{ flex: '1 1 130px', minWidth: 0 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default PeriodPicker;
