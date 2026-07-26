export declare const scrollToTop: (behavior?: ScrollBehavior) => void;
export declare const scrollToElement: (elementId: string, offset?: number) => void;
export declare const groupBy: <T, K extends keyof any>(array: T[], key: (item: T) => K) => Record<K, T[]>;
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
export declare const capitalize: (str: string) => string;
export declare const truncate: (str: string, length: number) => string;
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidPhone: (phone: string) => boolean;
export declare const formatDate: (date: Date, locale?: string) => string;
export declare const formatRelativeTime: (date: Date) => string;
export declare const isMobile: () => boolean;
export declare const isTablet: () => boolean;
export declare const isDesktop: () => boolean;
export declare const storage: {
    get: <T>(key: string, defaultValue?: T) => T | null;
    set: <T>(key: string, value: T) => void;
    remove: (key: string) => void;
    clear: () => void;
};
