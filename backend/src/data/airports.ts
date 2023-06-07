export interface Airport {
  iata: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const airports: Airport[] = [
  {
    "coordinates": {
      "lat": 52.351389,
      "lng": 13.493889
    },
    "iata": "BER"
  },
  {
    "coordinates": {
      "lat": 48.353802,
      "lng": 11.7861
    },
    "iata": "MUC"
  },
  {
    "coordinates": {
      "lat": 25.29870763228481,
      "lng": -0.461941
    },
    "iata": "LHR"
  },
  {
    "coordinates": {
      "lat": 40.639801,
      "lng": -73.7789
    },
    "iata": "JFK"
  },
  {
    "coordinates": {
      "lat": 49.012798,
      "lng": 2.55
    },
    "iata": "CDG"
  },
  {
    "coordinates": {
      "lat": 34.42729949951172,
      "lng": 135.24400329589844
    },
    "iata": "KIX"
  },
  {
    "coordinates": {
      "lat": 22.308901,
      "lng": 113.915001
    },
    "iata": "HKG"
  },
  {
    "coordinates": {
      "lat": 1.35019,
      "lng": 103.994003
    },
    "iata": "SIN"
  },
  {
    "coordinates": {
      "lat": 35.552299,
      "lng": 139.779999
    },
    "iata": "HND"
  },
  {
    "coordinates": {
      "lat": -26.1392,
      "lng": 28.246
    },
    "iata": "JNB"
  }
];
