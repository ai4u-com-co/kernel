import type { Preview } from '@storybook/react-vite'
import React from 'react'
import { ThemeProvider } from '../src/context/ThemeContext'
import '../src/styles/base.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: { test: 'todo' },
    backgrounds: {
      default: 'mintCream',
      values: [
        { name: 'mintCream', value: '#EAF4EB' },
        { name: 'white',     value: '#FFFFFF'  },
        { name: 'dark',      value: '#171717'  },
      ],
    },
  },
}

export default preview
