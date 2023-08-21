import { TempScaleKind } from 'modules/Filtrering/types';
import { Weather } from '../types';

export const WeatherDetails = ({
  condition,
  temp,
  wind,
  humidity,
  clouds,
}: Weather) => {
  return (
    <div>
      <img src={condition.icon} alt={condition.text} width={50} height={50} />
      {condition.text}
      <br />
      Temperature: {temp[TempScaleKind.CELSIUS]}
      <br />
      Wind: {wind.direction} {wind.kph}kph ({wind.mph}mph)
      <br />
      Humidity: {humidity}%
      <br />
      {clouds ? `Clouds: ${clouds}%` : ''}
    </div>
  );
};
