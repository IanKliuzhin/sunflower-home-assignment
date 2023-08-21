import { City } from 'modules/Cities/types';

export interface WeatherStoreSlice {
  weatherCityName: City['name'];
  weatherCoords: City['coords'] | null;

  setWeatherCity: (name: City['name'], coords: City['coords']) => void;
}
