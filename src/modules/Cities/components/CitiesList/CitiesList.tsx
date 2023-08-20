import { useEffect, useMemo } from 'react';
import { FilterKind, SortingKind } from 'modules/Filtrering/types';
import { useBoundStore } from 'store';
import { CityPreview } from '../CityPreview';
import classes from './CitiesList.module.scss';

export const CitiesList = () => {
  const { citiesList, fetchCities, searchQuery, filters, sorting } =
    useBoundStore();

  const filteredCities = useMemo(
    () =>
      citiesList.filter((c) =>
        filters.every((filter) => {
          switch (filter.kind) {
            case FilterKind.CONTINENT:
              return !filter.value || c.continent === filter.value;
            default:
              return true;
          }
        }),
      ),
    [citiesList, filters],
  );

  const sortedCities = useMemo(
    () =>
      [...filteredCities].sort((a, b) =>
        // TODO: implement sorting by distance
        sorting === SortingKind.NAME
          ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
          : -1,
      ),
    [filteredCities, sorting],
  );

  const searchedCities = useMemo(
    () =>
      sortedCities.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery) ||
          c.country.toLowerCase().includes(searchQuery),
      ),
    [sortedCities, searchQuery],
  );
  console.log('searchQuery', searchQuery);
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  if (!searchedCities.length) return <div>No cities found.</div>;

  return (
    <div className={classes.cities_list}>
      {searchedCities.map((city) => (
        // not using city name as a key because of repetion
        // of Rio de Janeiro in mock list
        <CityPreview {...city} key={city.image.href} />
      ))}
    </div>
  );
};
