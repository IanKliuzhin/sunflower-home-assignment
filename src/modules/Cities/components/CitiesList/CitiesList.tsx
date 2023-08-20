import { useEffect } from 'react';
import { useBoundStore } from 'store';
import { CityPreview } from '../CityPreview';
import classes from './CitiesList.module.scss';

export const CitiesList = () => {
  const citiesList = useBoundStore((state) => state.citiesList);
  const fetchCities = useBoundStore((state) => state.fetchCities);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <div className={classes.cities_list}>
      {citiesList.map((city) => (
        // not using city name as a key because of repetion
        // of Rio de Janeiro in mock list
        <CityPreview {...city} key={city.image.href} />
      ))}
    </div>
  );
};
