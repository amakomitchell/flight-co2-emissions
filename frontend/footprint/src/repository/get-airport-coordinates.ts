import { AirportCoord } from '../types/airport-coord';

export const getAirportCoordinates = async (
  iata: string
): Promise<AirportCoord> => {
  const res = await fetch(`http://localhost:3030/${iata}`);
  const data = await res.json();
  return data;
};
