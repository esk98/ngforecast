export interface shortWeather {
  location: string;
  icon: string;
  condition: string;
  temperature: number;
  wind: number;
  humidity: number;
  feelslike: number;
}
export interface dailyWeather {
  data: number[];
  icon: string[];
  temperature: number[];
}
export interface todayHighlights {
  pressure: number;
  clouds: number;
  uvi: number;
  sunrise: number;
  sunset: number;
  visibility: number;
  dewPoint: number;
}

export interface params {
  lat: number,
  lon: number,
}