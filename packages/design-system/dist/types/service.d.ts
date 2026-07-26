export interface Service {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    price?: string;
    deliveryTime: string;
    category: ServiceCategory;
    priority: number;
    featured: boolean;
    icon?: string;
    color?: string;
    gradient?: string;
    media?: ServiceMedia;
    thumbnail?: string;
    tags: string[];
    status: ServiceStatus;
    metadata: ServiceMetadata;
}
export interface ServiceMedia {
    video?: string;
    gif?: string;
    poster?: string;
}
export interface ServiceMetadata {
    createdAt: string;
    updatedAt: string;
    version: string;
    author: string;
}
export declare enum ServiceSuperCategory {
    OPERATION = "operation",
    STRATEGY = "strategy",
    EDUCATION = "education",
    TRANSFORMATION = "transformation"
}
export declare enum ServiceCategory {
    AUTOMATION = "automation",
    AI_ASSISTANT = "ai_assistant",
    ANALYTICS = "analytics",
    ECOMMERCE = "ecommerce",
    TRAINING = "training",
    CONSULTING = "consulting"
}
export declare enum ServiceStatus {
    ACTIVE = "active",
    INACTIVE = "inactive",
    COMING_SOON = "coming_soon",
    DEPRECATED = "deprecated"
}
export interface ServiceConfig {
    displaySettings: {
        showPrices: boolean;
        showDeliveryTime: boolean;
        cardsPerRow: number;
        showCategories: boolean;
    };
    filterSettings: {
        enableCategoryFilter: boolean;
        enablePriceFilter: boolean;
        enableTagFilter: boolean;
    };
}
