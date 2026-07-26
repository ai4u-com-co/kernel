import { Meta, StoryObj } from '@storybook/react-vite';
import { default as Textarea } from './Textarea';
declare const meta: Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof Textarea>;
export declare const Default: Story;
export declare const Error: Story;
export declare const Disabled: Story;
