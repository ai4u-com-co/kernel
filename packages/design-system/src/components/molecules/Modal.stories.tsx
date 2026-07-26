import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import Modal from './Modal'
import Button from '../atoms/Button'

const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Modal>

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="dashboard" onClick={() => setOpen(true)}>Abrir modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div style={{ padding: 24 }}>Contenido del modal</div>
        </Modal>
      </>
    )
  },
}
