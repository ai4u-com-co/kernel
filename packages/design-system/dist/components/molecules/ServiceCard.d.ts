import { default as React } from 'react';
import { Service } from '../../types/service';
interface ServiceCardProps {
    service: Service;
    showPrice?: boolean;
    compact?: boolean;
    onClick?: () => void;
}
declare const ServiceCard: React.FC<ServiceCardProps>;
export default ServiceCard;
