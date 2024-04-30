import { useBoundStore } from 'store';
import { Filter } from '../Filter';
import { Search } from '../Search';
import { Sorting } from '../Sorting';
import { TempScaleSelector } from '../TempScaleSelector';
import classes from './Filtering.module.scss';

export const Filtering = () => {
    const { filters, updateFilter } = useBoundStore();

    return (
        <div className={classes.filtering}>
            <Search />
            {filters.map((filter) => (
                <Filter
                    key={filter.kind}
                    value={filter.value}
                    update={(val) => updateFilter(filter.kind, val)}
                />
            ))}
            <div className={classes.sort_and_temp}>
                <Sorting />
                <TempScaleSelector />
            </div>
        </div>
    );
};
