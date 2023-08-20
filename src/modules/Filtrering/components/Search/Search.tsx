import { useBoundStore } from 'store';
import { Input } from './Input';
import classes from './Search.module.scss';

export const Search = () => {
  const searchQuery = useBoundStore((state) => state.searchQuery);
  const updateSearchQuery = useBoundStore((state) => state.updateSearchQuery);

  return (
    <div className={classes.search_container}>
      Search
      <Input
        value={searchQuery}
        onChange={(e) => updateSearchQuery(e.target.value)}
        placeholder="Type to search"
      />
    </div>
  );
};
