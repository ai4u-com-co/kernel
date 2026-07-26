import type { Meta, StoryObj } from '@storybook/react-vite'
import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Atoms/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    error: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: { placeholder: 'Título del ticket' },
}

export const Small: Story = {
  args: { placeholder: 'Small', size: 'small' },
}

export const Large: Story = {
  args: { placeholder: 'Large', size: 'large' },
}

export const Error: Story = {
  args: { placeholder: 'Con error', error: true },
}

export const Disabled: Story = {
  args: { placeholder: 'Deshabilitado', disabled: true },
}
