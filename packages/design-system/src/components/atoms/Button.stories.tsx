import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'text', 'minimal', 'industrial'],
    },
    disabled: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: 'Botón primario', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Botón secundario', variant: 'secondary' },
}

export const Outline: Story = {
  args: { children: 'Botón outline', variant: 'outline' },
}

export const Text: Story = {
  args: { children: 'Botón texto', variant: 'text' },
}

export const Minimal: Story = {
  args: { children: 'Minimal', variant: 'minimal' },
}

export const Industrial: Story = {
  args: { children: 'Industrial', variant: 'industrial' },
}

export const Disabled: Story = {
  args: { children: 'Deshabilitado', variant: 'primary', disabled: true },
}
