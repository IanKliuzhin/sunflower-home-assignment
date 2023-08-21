import { City } from 'modules/Cities/types';
import { TempScaleKind } from 'modules/Filtrering/types';

export type Weather = {
  condition: {
    text: string;
    icon: string;
  };
  temp: {
    [TempScaleKind.CELSIUS]: number;
    [TempScaleKind.FAHRENHEIT]: number;
  };
  wind: {
    direction?: string;
    kph: number;
    mph: number;
  };
  humidity: number;
  clouds?: number;
};

export interface WeatherStoreSlice {
  weatherCityName: City['name'];
  weatherCoords: City['coords'] | null;
  currentWeather?: Weather;
  forecast?: Weather[];

  setWeatherCity: (name: City['name'], coords: City['coords']) => void;
  setCurrentWeather: (weather: Weather) => void;
  setForecast: (forecast: Weather[]) => void;
}
