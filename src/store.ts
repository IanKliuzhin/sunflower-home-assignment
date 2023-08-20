import { create } from 'zustand';
import { createCitiesSlice } from 'modules/Cities';
import { CitiesStoreSlice } from 'modules/Cities/types';
import { createFilteringSlice } from 'modules/Filtrering';
import { FilteringStoreSlice } from 'modules/Filtrering/types';

export const useBoundStore = create<CitiesStoreSlice & FilteringStoreSlice>()(
  (...a) => ({
    ...createCitiesSlice(...a),
    ...createFilteringSlice(...a),
  }),
);
