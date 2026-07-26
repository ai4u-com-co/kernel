import { default as React } from 'react';
import { ServiceCategory } from '../../types/service';
interface ServicesFilterProps {
    searchValue: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    selectedTab: number;
    onTabChange: (event: React.SyntheticEvent, newValue: number) => void;
    onClearFilters: () => void;
    filteredCount: number;
    categoryTabs: Array<{
        label: string;
        value: ServiceCategory | undefined;
    }>;
}
declare const ServicesFilter: React.FC<ServicesFilterProps>;
export default ServicesFilter;
