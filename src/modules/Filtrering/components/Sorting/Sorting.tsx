import { SortingKind } from 'modules/Filtrering/types';
import { useBoundStore } from 'store';
import { Selector } from '../Selector';
import classes from './Sorting.module.scss';

export const Sorting = () => {
  const { sorting, updateSorting } = useBoundStore();

  return (
    <div className={classes.sorting_container}>
      Sort by
      <Selector
        options={Object.values(SortingKind).map((kind) => ({
          value: kind,
          text: kind,
        }))}
        currentValue={sorting}
        onChange={(kind) => updateSorting(kind as SortingKind)}
      />
    </div>
  );
};
