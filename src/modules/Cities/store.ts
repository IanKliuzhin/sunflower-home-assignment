import { create } from 'zustand';
import { fetchCities } from 'api/fetchCities';
import { CitiesStoreType, City } from './types';

export const useCitiesStore = create<CitiesStoreType>((set) => ({
  citiesList: [],
  setCities: (list: City[]) => set(() => ({ citiesList: list })),
  fetchCities: () => fetchCities().then((list) => set({ citiesList: list })),
}));
