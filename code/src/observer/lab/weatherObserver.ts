import { WeatherData } from "./weatherData";

export interface weatherObserver {
    update(weatherData: WeatherData): void;
}