import { Meta, StoryObj } from '@storybook/react-vite';
import { default as Select } from './Select';
declare const meta: Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof Select>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Disabled: Story;
