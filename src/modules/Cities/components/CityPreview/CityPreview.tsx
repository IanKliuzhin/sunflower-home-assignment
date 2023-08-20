import { City } from 'modules/Cities/types';
import classes from './CityPreview.module.scss';

export const CityPreview = ({ name, country, description, image }: City) => {
  return (
    <div className={classes.city}>
      <img className={classes.city__bg} src={image.href} />
      <div className={classes.city__name}>{name}</div>
      <div className={classes.city__country}>{country}</div>
      <div className={classes.city__description}>{description}</div>
    </div>
  );
};
