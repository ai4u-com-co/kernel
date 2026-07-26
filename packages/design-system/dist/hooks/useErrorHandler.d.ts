interface UseErrorHandlerReturn {
    error: Error | null;
    hasError: boolean;
    clearError: () => void;
    handleError: (error: Error) => void;
    captureAsyncError: <T>(asyncFn: () => Promise<T>) => Promise<T | undefined>;
}
/**
 * Custom hook for handling errors in functional components
 *
 * Provides utilities for error handling in async operations,
 * event handlers, and other scenarios where ErrorBoundary cannot catch errors.
 *
 * @example
 * const { error, hasError, clearError, captureAsyncError } = useErrorHandler();
 *
 * const handleSubmit = async () => {
 *   await captureAsyncError(async () => {
 *     await submitForm();
 *   });
 * };
 */
export declare const useErrorHandler: () => UseErrorHandlerReturn;
export default useErrorHandler;
