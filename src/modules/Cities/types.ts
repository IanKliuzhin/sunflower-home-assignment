export enum Country {
  SPAIN = 'Spain',
  JAPAN = 'Japan',
  UNITED_STATES = 'United States',
  AUSTRALIA = 'Australia',
  BRAZIL = 'Brazil',
  EGYPT = 'Egypt',
  FRANCE = 'France',
  ARGENTINA = 'Argentina',
  ITALY = 'Italy',
  CANADA = 'Canada',
  GERMANY = 'Germany',
  SOUTH_AFRICA = 'South Africa',
  MEXICO = 'Mexico',
  RUSSIA = 'Russia',
  CHINA = 'China',
  INDIA = 'India',
  UNITED_ARAB_EMIRATES = 'United Arab Emirates',
  UNITED_KINGDOM = 'United Kingdom',
  NETHERLANDS = 'Netherlands',
  SINGAPORE = 'Singapore',
  TURKEY = 'Turkey',
  THAILAND = 'Thailand',
}

export enum Continent {
  EUROPE = 'Europe',
  ASIA = 'Asia',
  NORTH_AMERICA = 'North America',
  AUSTRALIA = 'Australia',
  SOUTH_AMERICA = 'South America',
  AFRICA = 'Africa',
}

export type City = {
  name: string;
  continent: string;
  active: boolean;
  country: Country;
  description: string;
  image: URL;
  coords: {
    lat: number;
    lng: number;
  };
};

export type CitiesStoreType = {
  citiesList: City[];
  setCities: (list: City[]) => void;
  fetchCities: () => void;
};
