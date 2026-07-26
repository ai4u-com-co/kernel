import { ReactNode } from 'react';
import { TypographyProps as MuiTypographyProps } from '@mui/material';
interface TypographyExtendedProps extends MuiTypographyProps {
    children?: ReactNode;
    href?: string;
    target?: string;
    component?: any;
}
export declare const Giant: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H1: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H2: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H3: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H4: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H5: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const H6: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const BodyText: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const SmallText: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const CodeText: (props: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export declare const Typography: ({ variant, ...props }: TypographyExtendedProps) => import("react/jsx-runtime").JSX.Element;
export default Typography;
