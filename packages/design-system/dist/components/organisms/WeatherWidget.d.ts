import { default as React } from 'react';
interface WeatherData {
    location: string;
    temperature: number;
    condition: string;
    high: number;
    low: number;
    wind: number;
    precipitation: number;
    hourlyForecast: Array<{
        time: string;
        condition: string;
        precipitation: number;
        temperature: number;
    }>;
}
interface WeatherWidgetProps {
    data: WeatherData;
    variant?: 'default' | 'elevated' | 'outlined';
    showLocationIcon?: boolean;
    onRefresh?: () => void;
}
declare const WeatherWidget: React.FC<WeatherWidgetProps>;
export default WeatherWidget;
