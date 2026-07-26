import { default as React } from 'react';
import { ServiceCategory } from '../../types/service';
interface ServicesStatsProps {
    stats: {
        total: number;
        active: number;
        featured: number;
        byCategory: Record<ServiceCategory, number>;
    };
    getCategories: () => ServiceCategory[];
}
declare const ServicesStats: React.FC<ServicesStatsProps>;
export default ServicesStats;
