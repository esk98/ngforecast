export interface CurrentWeather {
    location: string;
    condition: {
        icon: string;
        text: string;
        code: number;
    };
    temperature: number;
    wind: number;
    humidity: number;
    isDay: boolean;
    feelslike: number;
    uv: number;
}
