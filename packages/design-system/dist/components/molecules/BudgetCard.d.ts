import { default as React } from 'react';
interface BudgetCategory {
    name: string;
    amount: number;
    color?: string;
    icon?: React.ReactNode;
}
interface BudgetCardProps {
    title: string;
    subtitle?: string;
    categories: BudgetCategory[];
    totalAmount?: number;
    onAddCategory?: () => void;
    variant?: 'default' | 'elevated' | 'outlined' | 'industrial';
}
declare const BudgetCard: React.FC<BudgetCardProps>;
export default BudgetCard;
