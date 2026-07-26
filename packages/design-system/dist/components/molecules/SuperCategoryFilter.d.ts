import { default as React } from 'react';
import { ServiceSuperCategory } from '../../types/service';
interface SuperCategoryFilterProps {
    selectedValue?: ServiceSuperCategory;
    onValueChange: (value?: ServiceSuperCategory) => void;
    options: Array<{
        label: string;
        value: ServiceSuperCategory | undefined;
    }>;
}
declare const SuperCategoryFilter: React.FC<SuperCategoryFilterProps>;
export default SuperCategoryFilter;
