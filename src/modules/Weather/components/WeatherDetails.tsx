import { tempUnitsMap } from 'modules/Filtrering/components/helpers';
import { useBoundStore } from 'store';
import { Weather } from '../types';

export const WeatherDetails = ({
  condition,
  temp,
  wind,
  humidity,
  clouds,
}: Weather) => {
  const tempScale = useBoundStore((state) => state.tempScale);

  return (
    <div>
      <img src={condition.icon} alt={condition.text} width={50} height={50} />
      {condition.text}
      <br />
      Temperature: {temp[tempScale]} {tempUnitsMap[tempScale]}
      <br />
      Wind: {wind.direction} {wind.kph}kph ({wind.mph}mph)
      <br />
      Humidity: {humidity}%
      <br />
      {clouds ? `Clouds: ${clouds}%` : ''}
    </div>
  );
};
