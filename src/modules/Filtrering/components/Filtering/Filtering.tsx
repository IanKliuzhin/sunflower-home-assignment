import { useBoundStore } from 'store';
import { Filter } from '../Filter';
import { Search } from '../Search';

export const Filtering = () => {
  const { filters, updateFilter } = useBoundStore();

  return (
    <div>
      <Search />
      {filters.map((filter) => (
        <Filter
          key={filter.kind}
          value={filter.value}
          update={(val) => updateFilter(filter.kind, val)}
        />
      ))}
    </div>
  );
};
