import { City, Continent, Country } from 'modules/Cities/types';

export const cities: City[] = [
  {
    name: 'Barcelona',
    continent: Continent.EUROPE,
    active: true,
    country: Country.SPAIN,
    description:
      'Barcelona is a city on the coast of northeastern Spain. It is the capital and largest city of the autonomous community of Catalonia.',
    image: new URL('https://picsum.photos/id/402/500/500'),
    coords: {
      lat: 41.390205,
      lng: 2.154007,
    },
  },
  {
    name: 'Tokyo',
    continent: Continent.ASIA,
    active: true,
    country: Country.JAPAN,
    description:
      'Tokyo is the capital and largest city of Japan. It is also one of the 47 prefectures of Japan.',
    image: new URL('https://picsum.photos/id/401/500/500'),
    coords: {
      lat: 35.689487,
      lng: 139.691711,
    },
  },
  {
    name: 'New York City',
    continent: Continent.NORTH_AMERICA,
    active: true,
    country: Country.UNITED_STATES,
    description:
      'New York City is the most populous city in the United States and is known for its iconic landmarks such as Times Square and the Statue of Liberty.',
    image: new URL('https://picsum.photos/id/400/500/500'),
    coords: {
      lat: 40.712776,
      lng: -74.005974,
    },
  },
  {
    name: 'Sydney',
    continent: Continent.AUSTRALIA,
    active: true,
    country: Country.AUSTRALIA,
    description:
      'Sydney is the capital city of the state of New South Wales, and the most populous city in Australia.',
    image: new URL('https://picsum.photos/id/399/500/500'),
    coords: {
      lat: -33.86882,
      lng: 151.20929,
    },
  },
  {
    name: 'Rio de Janeiro',
    continent: Continent.SOUTH_AMERICA,
    active: true,
    country: Country.BRAZIL,
    description:
      'Rio de Janeiro is a city in Brazil and is known for its breathtaking landscapes and the famous Christ the Redeemer statue.',
    image: new URL('https://picsum.photos/id/398/500/500'),
    coords: {
      lat: -22.906847,
      lng: -43.172897,
    },
  },
  {
    name: 'Cairo',
    continent: Continent.AFRICA,
    active: true,
    country: Country.EGYPT,
    description:
      'Cairo is the capital of Egypt and is known for its ancient monuments such as the Great Sphinx and the Pyramids of Giza.',
    image: new URL('https://picsum.photos/id/397/500/500'),
    coords: {
      lat: 30.044419,
      lng: 31.235712,
    },
  },
  {
    name: 'Paris',
    continent: Continent.EUROPE,
    active: true,
    country: Country.FRANCE,
    description:
      'Paris is the capital of France and is known for its famous landmarks such as the Eiffel Tower and the Louvre Museum.',
    image: new URL('https://picsum.photos/id/396/500/500'),
    coords: {
      lat: 48.856613,
      lng: 2.352222,
    },
  },
  {
    name: 'Buenos Aires',
    continent: Continent.SOUTH_AMERICA,
    active: true,
    country: Country.ARGENTINA,
    description:
      'Buenos Aires is the capital and largest city of Argentina and is known for its tango music and vibrant culture.',
    image: new URL('https://picsum.photos/id/395/500/500'),
    coords: {
      lat: -34.603722,
      lng: -58.381592,
    },
  },
  {
    name: 'Rome',
    continent: Continent.EUROPE,
    active: true,
    country: Country.ITALY,
    description:
      'Rome is the capital of Italy and is known for its ancient history and iconic landmarks such as the Colosseum and the Vatican City.',
    image: new URL('https://picsum.photos/id/394/500/500'),
    coords: {
      lat: 41.902783,
      lng: 12.496366,
    },
  },
  {
    name: 'Toronto',
    continent: Continent.NORTH_AMERICA,
    active: true,
    country: Country.CANADA,
    description:
      'Toronto is the capital city of the province of Ontario and is known for its diverse culture and iconic CN Tower.',
    image: new URL('https://picsum.photos/id/393/500/500'),
    coords: {
      lat: 43.65107,
      lng: -79.347015,
    },
  },
  {
    name: 'Berlin',
    continent: Continent.EUROPE,
    active: true,
    country: Country.GERMANY,
    description:
      'Berlin is the capital and largest city of Germany and is known for its rich history and vibrant art scene.',
    image: new URL('https://picsum.photos/id/392/500/500'),
    coords: {
      lat: 52.520008,
      lng: 13.404954,
    },
  },
  {
    name: 'Cape Town',
    continent: Continent.AFRICA,
    active: true,
    country: Country.SOUTH_AFRICA,
    description:
      'Cape Town is a city in South Africa and is known for its stunning natural beauty and iconic Table Mountain.',
    image: new URL('https://picsum.photos/id/391/500/500'),
    coords: {
      lat: -33.92487,
      lng: 18.424055,
    },
  },
  {
    name: 'Mexico City',
    continent: Continent.NORTH_AMERICA,
    active: true,
    country: Country.MEXICO,
    description:
      'Mexico City is the capital of Mexico and is known for its rich cultural heritage, vibrant street life, and historic architecture.',
    image: new URL('https://picsum.photos/id/390/500/500'),
    coords: {
      lat: 19.432608,
      lng: -99.133209,
    },
  },
  {
    name: 'Moscow',
    continent: Continent.EUROPE,
    active: true,
    country: Country.RUSSIA,
    description:
      'Moscow is the capital and largest city of Russia, and is known for its iconic landmarks such as the Red Square and the Kremlin.',
    image: new URL('https://picsum.photos/id/389/500/500'),
    coords: {
      lat: 55.755825,
      lng: 37.617298,
    },
  },
  {
    name: 'Shanghai',
    continent: Continent.ASIA,
    active: true,
    country: Country.CHINA,
    description:
      'Shanghai is the largest city in China and is known for its modern skyline and vibrant culture.',
    image: new URL('https://picsum.photos/id/388/500/500'),
    coords: {
      lat: 31.230416,
      lng: 121.473701,
    },
  },
  {
    name: 'Mumbai',
    continent: Continent.ASIA,
    active: true,
    country: Country.INDIA,
    description:
      'Mumbai is the largest city in India and is known for its bustling streets, Bollywood film industry, and colonial architecture.',
    image: new URL('https://picsum.photos/id/387/500/500'),
    coords: {
      lat: 19.07609,
      lng: 72.877426,
    },
  },
  {
    name: 'Dubai',
    continent: Continent.ASIA,
    active: true,
    country: Country.UNITED_ARAB_EMIRATES,
    description:
      'Dubai is a city in the United Arab Emirates and is known for its luxurious lifestyle and modern architecture.',
    image: new URL('https://picsum.photos/id/386/500/500'),
    coords: {
      lat: 25.204849,
      lng: 55.270782,
    },
  },
  {
    name: 'London',
    continent: Continent.EUROPE,
    active: true,
    country: Country.UNITED_KINGDOM,
    description:
      'London is the capital and largest city of the United Kingdom and is known for its rich history, iconic landmarks, and vibrant culture.',
    image: new URL('https://picsum.photos/id/385/500/500'),
    coords: {
      lat: 51.507351,
      lng: -0.127758,
    },
  },
  {
    name: 'Amsterdam',
    continent: Continent.EUROPE,
    active: true,
    country: Country.NETHERLANDS,
    description:
      'Amsterdam is the capital of the Netherlands and is known for its beautiful canals, cycling culture, and historic architecture.',
    image: new URL('https://picsum.photos/id/384/500/500'),
    coords: {
      lat: 52.370216,
      lng: 4.895168,
    },
  },
  {
    name: 'Singapore',
    continent: Continent.ASIA,
    active: true,
    country: Country.SINGAPORE,
    description:
      'Singapore is a city-state in Southeast Asia and is known for its modern infrastructure, diverse culture, and stunning skyline.',
    image: new URL('https://picsum.photos/id/383/500/500'),
    coords: {
      lat: 1.352083,
      lng: 103.819839,
    },
  },
  {
    name: 'Istanbul',
    continent: Continent.ASIA,
    active: true,
    country: Country.TURKEY,
    description:
      'Istanbul is a city in Turkey and is known for its rich history, stunning mosques, and vibrant bazaars.',
    image: new URL('https://picsum.photos/id/382/500/500'),
    coords: {
      lat: 41.008238,
      lng: 28.978359,
    },
  },
  {
    name: 'Rio de Janeiro',
    continent: Continent.SOUTH_AMERICA,
    active: true,
    country: Country.BRAZIL,
    description:
      'Rio de Janeiro is a city in Brazil and is known for its breathtaking landscapes and the famous Christ the Redeemer statue.',
    image: new URL('https://picsum.photos/id/381/500/500'),
    coords: {
      lat: -22.906847,
      lng: -43.172897,
    },
  },
  {
    name: 'Bangkok',
    continent: Continent.ASIA,
    active: true,
    country: Country.THAILAND,
    description:
      'Bangkok is the capital and largest city of Thailand and is known for its bustling street life, ornate temples, and vibrant nightlife.',
    image: new URL('https://picsum.photos/id/380/500/500'),
    coords: {
      lat: 13.756331,
      lng: 100.501765,
    },
  },
  {
    name: 'Vancouver',
    continent: Continent.NORTH_AMERICA,
    active: true,
    country: Country.CANADA,
    description:
      'Vancouver is a city in Canada and is known for its stunning natural beauty, diverse culture, and outdoor activities.',
    image: new URL('https://picsum.photos/id/379/500/500'),
    coords: {
      lat: 49.282729,
      lng: -123.120738,
    },
  },
];
