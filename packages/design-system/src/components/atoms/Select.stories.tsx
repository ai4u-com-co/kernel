import type { Meta, StoryObj } from '@storybook/react-vite'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
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
type Story = StoryObj<typeof Select>

const options = (
  <>
    <option value="bug">Bug</option>
    <option value="mejora">Mejora</option>
    <option value="nuevo">Nuevo desarrollo</option>
  </>
)

export const Default: Story = {
  args: { children: options },
}

export const Error: Story = {
  args: { children: options, error: true },
}

export const Disabled: Story = {
  args: { children: options, disabled: true },
}
