import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import DashboardSidebar from './DashboardSidebar'

const meta: Meta<typeof DashboardSidebar> = {
  title: 'Organisms/DashboardSidebar',
  component: DashboardSidebar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', display: 'flex' }}>
        <Story />
        <div style={{ flex: 1, background: '#F1F5F9', padding: 32 }}>
          <p style={{ color: '#64748B', fontFamily: 'monospace', fontSize: 12 }}>← contenido principal</p>
        </div>
      </div>
    ),
  ],
}
export default meta
type Story = StoryObj<typeof DashboardSidebar>

const baseGroups = [
  {
    id: 'produccion',
    label: 'Producción',
    items: [
      { id: 'orderloader', name: 'Order Loader',   href: '#', icon: 'package'    as const, status: 'online'   as const },
      { id: 'preflight',   name: 'Pre-Flight',     href: '#', icon: 'file-scan'  as const, status: 'offline'  as const },
    ],
  },
  {
    id: 'sistema',
    label: 'Sistema · ERP',
    items: [
      { id: 'sap-chat',    name: 'SAP B1 Chat',    href: '#', icon: 'terminal'       as const, status: 'online' as const },
    ],
  },
]

export const Default: Story = {
  args: {
    branding: { title: 'Mission Control', subtitle: 'Ecosistema IA · v1.0' },
    statusBadge: { status: 'online', label: 'Sistema Activo' },
    groups: baseGroups,
    stats: [
      { label: 'En línea', value: 2, color: '#22C55E' },
      { label: 'Offline',  value: 1, color: '#EF4444' },
    ],
    clock: { time: '14:32:05', date: 'JUE 29 MAY 2026' },
    signature: { caption: 'Desarrollado por', label: 'AI4U' },
  },
}

export const AllOffline: Story = {
  name: 'All offline',
  args: {
    ...Default.args,
    statusBadge: { status: 'offline', label: 'Sistema Caído' },
    groups: baseGroups.map(g => ({
      ...g,
      items: g.items.map(i => ({ ...i, status: 'offline' as const })),
    })),
    stats: [
      { label: 'En línea', value: 0, color: '#22C55E' },
      { label: 'Offline',  value: 3, color: '#EF4444' },
    ],
  },
}
