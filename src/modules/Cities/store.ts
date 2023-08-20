import { StateCreator } from 'zustand';
import { fetchCities } from 'api/fetchCities';
import { FilteringStoreSlice } from 'modules/Filtrering/types';
import { CitiesStoreSlice, City } from './types';

export const createCitiesSlice: StateCreator<
  CitiesStoreSlice & FilteringStoreSlice,
  [],
  [],
  CitiesStoreSlice
> = (set) => ({
  citiesList: [],
  setCities: (list: City[]) => set(() => ({ citiesList: list })),
  fetchCities: () => fetchCities().then((list) => set({ citiesList: list })),
});
