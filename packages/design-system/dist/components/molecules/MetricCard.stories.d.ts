import { Meta, StoryObj } from '@storybook/react-vite';
import { default as MetricCard } from './MetricCard';
declare const meta: Meta<typeof MetricCard>;
export default meta;
type Story = StoryObj<typeof MetricCard>;
export declare const Default: Story;
export declare const WithTrend: Story;
export declare const Error: Story;
export declare const Grid: Story;
