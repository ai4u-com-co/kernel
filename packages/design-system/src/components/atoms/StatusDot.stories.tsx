import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import StatusDot from './StatusDot'
import { AI4U_PALETTE } from '../../tokens/palette'

const meta: Meta<typeof StatusDot> = {
  title: 'Atoms/StatusDot',
  component: StatusDot,
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['online', 'offline', 'starting', 'checking', 'idle'] },
    size:   { control: 'number' },
  },
}
export default meta
type Story = StoryObj<typeof StatusDot>

export const Online:    Story = { args: { status: 'online' } }
export const Offline:   Story = { args: { status: 'offline' } }
export const Starting:  Story = { args: { status: 'starting' } }
export const Checking:  Story = { args: { status: 'checking' } }
export const Idle:      Story = { args: { status: 'idle' } }

export const AllStates: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      {(['online', 'offline', 'starting', 'checking', 'idle'] as const).map(s => (
        <div key={s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <StatusDot status={s} size={10} />
          <span style={{ fontSize: 11, color: AI4U_PALETTE.cadetGray, fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s}</span>
        </div>
      ))}
    </div>
  ),
}
