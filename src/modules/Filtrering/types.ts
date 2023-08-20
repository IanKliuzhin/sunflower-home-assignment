export enum FilterKind {
  CONTINENT = 'continent',
}

type ContinentFilter = {
  kind: FilterKind.CONTINENT;
  value: string;
};

// May become discriminating union
type Filter = ContinentFilter;

export enum SortingKind {
  NAME = 'Name',
  DISTANCE = 'Distance',
}

export enum TempScaleKind {
  CELSIUS = 'celsius',
  FAHRENHEIT = 'fahrenheit',
}

export interface FilteringStoreSlice {
  searchQuery: string;
  filters: Filter[];
  sorting: SortingKind;
  tempScale: TempScaleKind;

  updateSearchQuery: (query: string) => void;
  // TODO: typify value properly if possible
  updateFilter: (kind: FilterKind, value: string) => void;
  updateSorting: (kind: SortingKind) => void;
  updateTempScale: (kind: TempScaleKind) => void;
}
