export interface ErrorInfo {
    message: string;
    stack?: string;
    componentStack?: string;
    errorBoundary?: boolean;
    url?: string;
    userAgent?: string;
    timestamp?: string;
    userId?: string;
    sessionId?: string;
}
declare class ErrorTracker {
    private sessionId;
    constructor();
    private generateSessionId;
    private setupGlobalErrorHandlers;
    captureError(errorInfo: Partial<ErrorInfo>): void;
    captureException(error: Error, context?: string): void;
    captureMessage(message: string, level?: 'info' | 'warning' | 'error'): void;
    private sendToRemoteService;
    private shouldSendError;
    addContext(key: string, value: any): void;
    setUser(userId: string): void;
}
export declare const errorTracker: ErrorTracker;
export declare const useErrorTracking: () => {
    captureError: (errorInfo: Partial<ErrorInfo>) => void;
    captureException: (error: Error, context?: string) => void;
    captureMessage: (message: string, level?: "info" | "warning" | "error") => void;
    captureComponentError: (error: Error, errorInfo?: any) => void;
    addContext: (key: string, value: any) => void;
};
export default errorTracker;
