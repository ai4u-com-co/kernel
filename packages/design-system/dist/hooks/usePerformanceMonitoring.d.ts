interface PerformanceThresholds {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
    ttfb: number;
}
export declare const usePerformanceMonitoring: (pageName: string, thresholds?: Partial<PerformanceThresholds>) => {
    reportPerformanceIssue: (metric: string, value: number, context?: string) => void;
};
export {};
