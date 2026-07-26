import type { Meta, StoryObj } from '@storybook/react-vite'
import Textarea from './Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Atoms/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    error: { control: 'boolean' },
    scrollIntoViewOnFocus: { control: 'boolean' },
  },
}
export default meta
type Story = StoryObj<typeof Textarea>

export const Default: Story = {
  args: { placeholder: 'Describe tu solicitud...', rows: 4 },
}

export const Error: Story = {
  args: { placeholder: 'Con error', error: true, rows: 4 },
}

export const Disabled: Story = {
  args: { placeholder: 'Deshabilitado', disabled: true, rows: 4 },
}
