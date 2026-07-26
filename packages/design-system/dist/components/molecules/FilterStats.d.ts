import { default as React } from 'react';
interface FilterStatsProps {
    totalCount: number;
    filteredCount: number;
    activeFilters: string[];
}
declare const FilterStats: React.FC<FilterStatsProps>;
export default FilterStats;
