export interface ChatMessage {
    id: string;
    text: string;
    isUser: boolean;
    timestamp: Date;
    sessionId?: string;
}
export interface MakeResponse {
    success: boolean;
    message?: string;
    data?: any;
    error?: string;
}
export declare const sendMessageToMake: (message: string, sessionId?: string) => Promise<MakeResponse>;
export declare const generateSessionId: () => string;
export declare const getFallbackResponse: (message: string) => string;
