import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useBoundStore } from 'store';

export const WeatherPage = () => {
  const {
    weatherCityName,
    weatherCoords,
    citiesList,
    fetchCities,
    setWeatherCity,
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

  return (
    <div>
      <Link to="/">Back</Link>
      {weatherCityName && (
        <>
          <div>{weatherCityName}</div>
          <div>{`${weatherCoords?.lat}, ${weatherCoords?.lng}`}</div>
        </>
      )}
    </div>
  );
};
