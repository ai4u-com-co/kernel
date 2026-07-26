import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import ImageLightbox from './ImageLightbox'
import Button from '../atoms/Button'

const meta: Meta<typeof ImageLightbox> = {
  title: 'Molecules/ImageLightbox',
  component: ImageLightbox,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ImageLightbox>

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button variant="dashboard" onClick={() => setOpen(true)}>Ver imagen</Button>
        <ImageLightbox
          src="https://picsum.photos/800/600"
          alt="Ejemplo"
          open={open}
          onClose={() => setOpen(false)}
        />
      </>
    )
  },
}
