interface AI4UAnalyticsEvent {
    action: string;
    category?: string;
    label?: string;
    value?: number;
    custom_parameters?: Record<string, any>;
}
declare class AI4UAnalytics {
    private isGALoaded;
    constructor();
    private checkGAAvailability;
    trackServiceInterest(serviceName: string, source?: string): void;
    trackConsultationRequest(method?: string, serviceType?: string): void;
    trackDiagnosticStart(source?: string): void;
    trackPhilosophyEngagement(section: string, timeSpent?: number): void;
    trackPerformanceIssue(metric: string, value: number, threshold: number): void;
    trackErrorBoundary(errorInfo: any, componentStack?: string): void;
    trackEvent(event: AI4UAnalyticsEvent): void;
    trackPageView(pageName: string, customData?: Record<string, any>): void;
    trackTimeOnPage(pageName: string, timeSpent: number): void;
}
export declare const analytics: AI4UAnalytics;
export default analytics;
/**
 * Call once in the app root (e.g. layout.tsx) to set the tenant's GA measurement ID.
 * Without calling this, trackPageView is a no-op.
 *
 * @example
 * // app/layout.tsx
 * initAnalytics(process.env.NEXT_PUBLIC_GA_ID)
 */
export declare function initAnalytics(gaId: string | undefined): void;
