import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { City } from 'modules/Cities/types';

export const WeatherPage = () => {
  const {
    state: { city },
  } = useLocation();

  const [coords, setCoords] = useState<City['coords'] | null>(null);
  const [name, setName] = useState('');
  useEffect(() => {
    if (city) {
      setCoords(city.coords);
      setName(city.name);
    }
  }, [city]);

  return (
    <div>
      <Link to="/">Back</Link>
      {name && (
        <>
          <div>{name}</div>
          <div>{`${coords?.lat}, ${coords?.lng}`}</div>
        </>
      )}
    </div>
  );
};
