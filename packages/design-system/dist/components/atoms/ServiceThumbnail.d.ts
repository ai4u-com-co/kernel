interface ServiceThumbnailProps {
    serviceId: string;
    serviceColor?: string;
    size?: 'small' | 'medium' | 'large' | 'full-width';
    className?: string;
    customThumbnail?: string;
}
declare const ServiceThumbnail: ({ serviceId, serviceColor, size, className, customThumbnail }: ServiceThumbnailProps) => JSX.Element;
export default ServiceThumbnail;
