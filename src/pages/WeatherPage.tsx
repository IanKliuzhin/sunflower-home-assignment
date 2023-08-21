import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  adaptCurrentWeatherToStore,
  adaptForecastToStore,
  fetchWeather,
} from 'api/fetchWeather';
import { WeatherDetails } from 'modules/Weather';
import { useBoundStore } from 'store';

export const WeatherPage = () => {
  const {
    weatherCityName,
    weatherCoords,
    citiesList,
    currentWeather,
    forecast,
    fetchCities,
    setWeatherCity,
    setCurrentWeather,
    setForecast,
  } = useBoundStore();
  const { cityName: cityNameFromURL } = useParams();

  useEffect(() => {
    if (!citiesList.length) fetchCities();
  }, [citiesList, fetchCities]);

  useEffect(() => {
    if (!weatherCoords && cityNameFromURL && citiesList.length) {
      const matchedCity = citiesList.find(
        (city) =>
          city.name.toLowerCase().replace(' ', '_') ===
          cityNameFromURL.toLocaleLowerCase(),
      );
      if (matchedCity) setWeatherCity(matchedCity.name, matchedCity.coords);
    }
  }, [weatherCoords, cityNameFromURL, citiesList, setWeatherCity]);

  useEffect(() => {
    if (weatherCoords) {
      fetchWeather(weatherCoords).then((data) => {
        setCurrentWeather(adaptCurrentWeatherToStore(data.current));
        setForecast(data.forecast.forecastday.map(adaptForecastToStore));
      });
    }
  }, [setCurrentWeather, setForecast, weatherCoords]);

  return (
    <div>
      <Link to="/">
        <button type="button">Back</button>
      </Link>
      <br />
      <br />
      {weatherCityName && <div>{weatherCityName}</div>}
      {currentWeather && forecast && (
        <>
          <br />
          <br />
          Current weather
          <br />
          <WeatherDetails {...currentWeather} />
          <br />
          <br />
          Forecast for today:
          <br />
          <WeatherDetails {...forecast[0]} />
          <br />
          <br />
          Forecast for tomorrow:
          <br />
          <WeatherDetails {...forecast[1]} />
        </>
      )}
    </div>
  );
};
