import { getAirportCoordinates } from '../repository/get-airport-coordinates';
import haversine from 'haversine-distance';
import { CarbonEmisssionFormType } from '../types/emission-form-type';

export const getCarbonEmission = async (
  values: CarbonEmisssionFormType
): Promise<number> => {
  const { destination, departure, tripType, numOfTravelers } = values;

  // make api calls to get depature and destination airports coordinates
  const allCoordinates = await Promise.all([
    getAirportCoordinates(departure),
    getAirportCoordinates(destination),
  ]);

  const depatureCoordinates = allCoordinates[0];
  const destinationCoordinates = allCoordinates[1];

  // NB: 285g per passenger per km
  // 1. calculate distance between depature and destination in kms
  const distanceBtwAirports = haversine(
    {
      latitude: depatureCoordinates.coordinates.lat,
      longitude: depatureCoordinates.coordinates.lng,
    },
    {
      latitude: destinationCoordinates.coordinates.lat,
      longitude: destinationCoordinates.coordinates.lng,
    }
  );

  const distanceInKm = distanceBtwAirports / 1000;
  // 2. multiply distance by 2 if it is a return trip else leave it as it is
  const finalDistance = tripType === '2' ? distanceInKm * 2 : distanceInKm;

  // 3. calculate the number of co2 emissions per passenger per km and return in kg
  const totalEmission = numOfTravelers * 285 * finalDistance;
  const totalEmissioninKG = totalEmission / 1000;
  return Math.floor(totalEmissioninKG * 100) / 100;
};
