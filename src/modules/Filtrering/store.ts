import { StateCreator } from 'zustand';
import { CitiesStoreSlice, Continent } from 'modules/Cities/types';
import {
  FilterKind,
  FilteringStoreSlice,
  SortingKind,
  TempScaleKind,
} from './types';

export const createFilteringSlice: StateCreator<
  CitiesStoreSlice & FilteringStoreSlice,
  [],
  [],
  FilteringStoreSlice
> = (set) => ({
  searchQuery: '',
  filters: [{ kind: FilterKind.CONTINENT, value: null }],
  sorting: SortingKind.NAME,
  tempScale: TempScaleKind.CELSIUS,

  updateSearchQuery: (query) => set(() => ({ searchQuery: query })),
  updateFilter: (kind: FilterKind, value: Continent | null) =>
    set((state) => ({
      ...state,
      filters: state.filters.map((f) =>
        f.kind === kind ? { kind, value } : f,
      ),
    })),
  updateSorting: (kind: SortingKind) => set(() => ({ sorting: kind })),
  updateTempScale: (kind: TempScaleKind) => set(() => ({ tempScale: kind })),
});
