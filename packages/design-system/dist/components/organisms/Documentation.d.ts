import { default as React, ReactNode } from 'react';
interface DocumentationProps {
    title: string;
    description: string;
    children: ReactNode;
    codeExample?: string;
    props?: Array<{
        name: string;
        type: string;
        required: boolean;
        description: string;
        defaultValue?: string;
    }>;
    className?: string;
}
export declare const Documentation: React.FC<DocumentationProps>;
export default Documentation;
