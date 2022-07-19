export interface currentWeather {
    location: string;
    condition: {
        icon: string;
        text: string;
    };
    temperature: number;
    wind: number;
    humidity: number;
    isDay: boolean;
    feelslike: number;
    uv: number;
}
