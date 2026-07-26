import { default as React } from 'react';
import { BoxProps } from '@mui/material';
interface ProcessStepProps extends Omit<BoxProps, 'component'> {
    number: number;
    title: string;
    description: string;
    color?: string;
    size?: 'small' | 'medium' | 'large';
}
declare const ProcessStep: React.FC<ProcessStepProps>;
export default ProcessStep;
