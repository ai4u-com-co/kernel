import { Service } from '../types/service';
export declare const getHomeStructuredData: () => {
    "@context": string;
    "@type": string;
    name: string;
    url: string;
    description: string;
    potentialAction: {
        "@type": string;
        target: string;
        "query-input": string;
    };
};
export declare const getServicesStructuredData: () => {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    numberOfItems: number;
    itemListElement: {
        "@type": string;
        position: number;
        name: string;
        description: string;
        url: string;
    }[];
};
export declare const getServiceStructuredData: (service: Service) => {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    provider: {
        "@type": string;
        name: string;
        url: string;
    };
    areaServed: {
        "@type": string;
        name: string;
    };
    serviceType: import('..').ServiceCategory;
    offers: {
        "@type": string;
        price: string;
        priceCurrency: string;
        availability: string;
    };
};
export declare const getUseCasesStructuredData: () => {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    url: string;
    itemListElement: {
        "@type": string;
        position: number;
        name: string;
        description: string;
    }[];
};
export declare const getFAQStructuredData: (faqs: Array<{
    question: string;
    answer: string;
}>) => {
    "@context": string;
    "@type": string;
    mainEntity: {
        "@type": string;
        name: string;
        acceptedAnswer: {
            "@type": string;
            text: string;
        };
    }[];
};
export declare const getBreadcrumbStructuredData: (breadcrumbs: Array<{
    name: string;
    url: string;
}>) => {
    "@context": string;
    "@type": string;
    itemListElement: {
        "@type": string;
        position: number;
        name: string;
        item: string;
    }[];
};
export declare const getPageMetaTags: (page: string) => {
    title: string;
    description: string;
    keywords: string;
} | {
    title: string;
    description: string;
    keywords: string;
} | {
    title: string;
    description: string;
    keywords: string;
} | {
    title: string;
    description: string;
    keywords: string;
};
export declare const getCanonicalUrl: (path?: string) => string;
export declare const cleanMetaDescription: (description: string, maxLength?: number) => string;
export declare const generateKeywords: (baseKeywords: string[], additionalKeywords?: string[]) => string;
