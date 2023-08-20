import { Continent } from 'modules/Cities/types';

export enum FilterKind {
  CONTINENT = 'continent',
}

type ContinentFilter = {
  kind: FilterKind.CONTINENT;
  value: Continent | null;
};

// May become discriminating union
type Filter = ContinentFilter;

export enum SortingKind {
  NAME = 'name',
  DISTANCE = 'distance',
}

export enum TempScaleKind {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
}

export type FiltratonStoreType = {
  searchQuery: string;
  filters: Filter[];
  sorting: SortingKind;
  tempScale: TempScaleKind;

  updateSearchQuery: (query: string) => void;
  // TODO: typify value properly
  updateFilter: (kind: FilterKind, value: Continent | null) => void;
  updateSorting: (kind: SortingKind) => void;
  updateTempScale: (kind: TempScaleKind) => void;
};
