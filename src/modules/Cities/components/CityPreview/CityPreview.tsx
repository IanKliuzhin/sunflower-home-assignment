import { NavLink } from 'react-router-dom';
import { City } from 'modules/Cities/types';
import { useBoundStore } from 'store';
import classes from './CityPreview.module.scss';

export const CityPreview = ({
  name,
  country,
  description,
  image,
  coords,
}: City) => {
  const setWeatherCity = useBoundStore((state) => state.setWeatherCity);
  return (
    <NavLink
      to={`/weather/${name.replace(' ', '_')}`}
      onClick={() => setWeatherCity(name, coords)}
    >
      <div className={classes.city}>
        <img className={classes.city__bg} src={image.href} />
        <div className={classes.city__name}>{name}</div>
        <div className={classes.city__country}>{country}</div>
        <div className={classes.city__description}>{description}</div>
      </div>
    </NavLink>
  );
};
