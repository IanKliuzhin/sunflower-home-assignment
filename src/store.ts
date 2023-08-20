import { StateCreator, create } from 'zustand';
import { fetchCities } from 'api/fetchCities';
import { CitiesStoreSlice, City } from 'modules/Cities/types';
import {
  FilterKind,
  FilteringStoreSlice,
  SortingKind,
  TempScaleKind,
} from 'modules/Filtrering/types';

export const createFilteringSlice: StateCreator<
  CitiesStoreSlice & FilteringStoreSlice,
  [],
  [],
  FilteringStoreSlice
> = (set) => ({
  searchQuery: '',
  filters: [{ kind: FilterKind.CONTINENT, value: '' }],
  sorting: SortingKind.NAME,
  tempScale: TempScaleKind.CELSIUS,

  updateSearchQuery: (query) =>
    set(() => ({ searchQuery: query.toLowerCase() })),
  updateFilter: (kind: FilterKind, value: string) =>
    set((state) => ({
      ...state,
      filters: state.filters.map((f) =>
        f.kind === kind ? { kind, value } : f,
      ),
    })),
  updateSorting: (kind: SortingKind) => set(() => ({ sorting: kind })),
  updateTempScale: (kind: TempScaleKind) => set(() => ({ tempScale: kind })),
});

export const createCitiesSlice: StateCreator<
  CitiesStoreSlice & FilteringStoreSlice,
  [],
  [],
  CitiesStoreSlice
> = (set) => ({
  citiesList: [],
  setCities: (list: City[]) =>
    set(() => ({ citiesList: list.filter((c) => c.active) })),
  fetchCities: () => fetchCities().then((list) => set({ citiesList: list })),
});

export const useBoundStore = create<CitiesStoreSlice & FilteringStoreSlice>()(
  (...a) => ({
    ...createCitiesSlice(...a),
    ...createFilteringSlice(...a),
  }),
);
