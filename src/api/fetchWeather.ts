import axios from 'axios';
import { City } from 'modules/Cities/types';
import { TempScaleKind } from 'modules/Filtrering/types';
import { Weather } from 'modules/Weather/types';

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    headers: {
        'X-RapidAPI-Key': '637444eec6msh91ec05d29ccf201p102938jsn00824294c830',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
    },
};

export const fetchWeather = async (coords: City['coords']) => {
    const weather = await axios.request<{ current: any; forecast: any }>({
        ...options,
        params: { q: `${coords.lat},${coords.lng}`, days: 2 },
    });
    return weather.data;
};

export const adaptCurrentWeatherToStore = (data: any): Weather => ({
    condition: {
        text: data.condition.text,
        icon: `https:${data.condition.icon}`,
    },
    temp: {
        [TempScaleKind.CELSIUS]: data.temp_c,
        [TempScaleKind.FAHRENHEIT]: data.temp_f,
    },
    wind: {
        direction: data.wind_dir,
        kph: data.wind_kph,
        mph: data.wind_mph,
    },
    humidity: data.humidity,
    clouds: data.cloud,
});

export const adaptForecastToStore = (data: any): Weather => ({
    condition: {
        text: data.day.condition.text,
        icon: `https:${data.day.condition.icon}`,
    },
    temp: {
        [TempScaleKind.CELSIUS]: data.day.avgtemp_c,
        [TempScaleKind.FAHRENHEIT]: data.day.avgtemp_f,
    },
    wind: {
        kph: data.day.maxwind_kph,
        mph: data.day.maxwind_mph,
    },
    humidity: data.day.avghumidity,
});
