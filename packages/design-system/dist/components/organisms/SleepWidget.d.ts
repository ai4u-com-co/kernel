import { default as React } from 'react';
interface SleepData {
    totalHours: number;
    totalMinutes: number;
    remStart: string;
    remEnd: string;
    temperature: number;
    hasWifi: boolean;
    hasBluetooth: boolean;
    quality?: 'excellent' | 'good' | 'fair' | 'poor';
}
interface SleepWidgetProps {
    data: SleepData;
    date: string;
    time: string;
    variant?: 'default' | 'elevated' | 'outlined';
    onRefresh?: () => void;
}
declare const SleepWidget: React.FC<SleepWidgetProps>;
export default SleepWidget;
