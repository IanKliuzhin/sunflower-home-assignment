import { StateCreator, create } from 'zustand';
import { fetchCities } from 'api/fetchCities';
import { getDistanceFromTelAviv } from 'modules/Cities/helpers';
import { CitiesStoreSlice, City } from 'modules/Cities/types';
import {
    FilterKind,
    FilteringStoreSlice,
    SortingKind,
    TempScaleKind,
} from 'modules/Filtrering/types';
import { WeatherStoreSlice } from 'modules/Weather/types';
import { persist } from 'zustand/middleware';

type StoreType = CitiesStoreSlice & FilteringStoreSlice & WeatherStoreSlice;

export const createFilteringSlice: StateCreator<
    StoreType,
    [['zustand/persist', unknown]],
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
    StoreType,
    [],
    [],
    CitiesStoreSlice
> = (set) => ({
    citiesList: [],
    fetchCities: () =>
        fetchCities().then((list) =>
            set({
                citiesList: list
                    .filter((c) => c.active)
                    .map((city) => ({
                        ...city,
                        distance: getDistanceFromTelAviv(
                            city.coords.lat,
                            city.coords.lng,
                        ),
                    })),
            }),
        ),
});

export const createWeatherSlice: StateCreator<
    StoreType,
    [],
    [],
    WeatherStoreSlice
> = (set) => ({
    weatherCityName: '',
    weatherCoords: null,

    setWeatherCity: (name: City['name'], coords: City['coords']) =>
        set({ weatherCityName: name, weatherCoords: coords }),
    setCurrentWeather: (weather) => set({ currentWeather: weather }),
    setForecast: (forecast) => set({ forecast }),
});

export const useBoundStore = create<StoreType>()(
    persist(
        (...a) => ({
            ...createCitiesSlice(...a),
            ...createFilteringSlice(...a),
            ...createWeatherSlice(...a),
        }),
        {
            partialize: (state) => ({
                searchQuery: state.searchQuery,
                filters: state.filters,
                sorting: state.sorting,
                tempScale: state.tempScale,
            }),
            name: 'filters',
            version: 1,
        },
    ),
);
