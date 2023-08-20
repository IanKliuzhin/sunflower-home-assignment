import { Continent } from 'modules/Cities/types';
import classes from './Filter.module.scss';
import { Select } from './Select';

type Props = {
  value: string;
  update: (value: string) => void;
};
export const Filter = ({ value, update }: Props) => {
  return (
    <div className={classes.filter_container}>
      Continent{' '}
      <Select
        options={Object.values(Continent).map((value) => ({
          value,
          name: value,
        }))}
        defaultValue=""
        value={value}
        onChange={(value) => update(value)}
      />
    </div>
  );
};
