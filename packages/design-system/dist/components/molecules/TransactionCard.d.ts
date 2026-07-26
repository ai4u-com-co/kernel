import { default as React } from 'react';
interface Transaction {
    id: string;
    merchant: string;
    category: string;
    amount: number;
    time: string;
    icon?: React.ReactNode;
    status?: 'completed' | 'pending' | 'failed';
}
interface TransactionCardProps {
    title: string;
    subtitle?: string;
    transactions: Transaction[];
    onShowMore?: () => void;
    variant?: 'default' | 'elevated' | 'outlined';
}
declare const TransactionCard: React.FC<TransactionCardProps>;
export default TransactionCard;
