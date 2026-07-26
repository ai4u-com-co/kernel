import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { AI4U_PALETTE } from './palette'

const meta: Meta = {
  title: 'Tokens/Palette',
  tags: ['autodocs'],
}
export default meta

const Swatch = ({ name, value }: { name: string; value: string }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, width: 100 }}>
    <div style={{ width: 100, height: 60, backgroundColor: value, borderRadius: 8, border: '1px solid rgba(0,0,0,0.08)' }} />
    <span style={{ fontSize: 11, fontFamily: 'monospace', color: '#525252' }}>{name}</span>
    <span style={{ fontSize: 10, fontFamily: 'monospace', color: '#94989B' }}>{value}</span>
  </div>
)

export const BrandColors: StoryObj = {
  name: 'Brand Colors',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      <Swatch name="mintCream"    value={AI4U_PALETTE.mintCream} />
      <Swatch name="erieBlack"    value={AI4U_PALETTE.erieBlack} />
      <Swatch name="hotOrange"    value={AI4U_PALETTE.hotOrange} />
      <Swatch name="moderateBlue" value={AI4U_PALETTE.moderateBlue} />
      <Swatch name="cadetGray"    value={AI4U_PALETTE.cadetGray} />
    </div>
  ),
}

export const GrayScale: StoryObj = {
  name: 'Gray Scale',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {Object.entries(AI4U_PALETTE.gray).map(([key, val]) => (
        <Swatch key={key} name={`gray.${key}`} value={val} />
      ))}
    </div>
  ),
}

export const TelemetryColors: StoryObj = {
  name: 'Telemetry',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {Object.entries(AI4U_PALETTE.telemetry).map(([key, val]) => (
        <Swatch key={key} name={`telemetry.${key}`} value={val} />
      ))}
    </div>
  ),
}

export const TamaprintColors: StoryObj = {
  name: 'Tamaprint',
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {Object.entries(AI4U_PALETTE.tamaprint).map(([key, val]) => (
        <Swatch key={key} name={`tamaprint.${key}`} value={val} />
      ))}
    </div>
  ),
}
