import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import MetricCard from './MetricCard'

const meta: Meta<typeof MetricCard> = {
  title: 'Molecules/MetricCard',
  component: MetricCard,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof MetricCard>

export const Default: Story = {
  args: {
    title: 'Ventas del mes',
    value: '$12.4M',
    subtitle: '+8% vs mes anterior',
  },
}

export const WithTrend: Story = {
  args: {
    title: 'Pedidos procesados',
    value: '284',
    subtitle: '↑ 23 esta semana',
  },
}

export const Error: Story = {
  args: {
    title: 'Errores pipeline',
    value: '3',
    subtitle: 'Requieren revisión',
  },
}

export const Grid: Story = {
  name: 'Grid (4 cards)',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      <MetricCard title="Ventas" value="$12.4M" subtitle="+8% vs mes anterior" />
      <MetricCard title="Pedidos" value="284" subtitle="↑ 23 esta semana" />
      <MetricCard title="Clientes" value="47" subtitle="3 nuevos este mes" />
      <MetricCard title="Errores" value="3" subtitle="Requieren revisión" />
    </div>
  ),
}
