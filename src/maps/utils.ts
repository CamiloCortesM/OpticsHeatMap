import { axiosInstance } from '../api/axiosConfig';
import { OpticWithLeadsResponse } from '../interfaces/OpticsResponse';

/**
 * Generates random points around a given latitude and longitude.
 * This is used to simulate lead locations around an optical store.
 *
 * @param latitude - The latitude of the central point.
 * @param longitude - The longitude of the central point.
 * @param numPoints - The number of random points to generate.
 * @param radius - The radius (in meters) within which to generate the points.
 * @returns An array of google.maps.LatLng objects representing the generated points.
 */
export const generateRandomPoints = (
  latitude: number,
  longitude: number,
  numPoints: number,
  radius: number
): google.maps.LatLng[] => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radius;
    const offsetLat = (distance * Math.cos(angle)) / 111320;
    const offsetLng =
      (distance * Math.sin(angle)) /
      (111320 * Math.cos(latitude * (Math.PI / 180)));
    // No truncamos los cálculos internos
    const newLat = latitude + offsetLat;
    const newLng = longitude + offsetLng;
    // Truncamos solo para la visualización
    points.push(
      new google.maps.LatLng(
        parseFloat(newLat.toFixed(4)),
        parseFloat(newLng.toFixed(4))
      )
    );
  }

  return points;
};

/**
 * Retrieves points representing leads around various optical stores.
 * Currently uses static data but should be updated to fetch from an API.
 *
 * @returns An array of google.maps.LatLng objects representing the points.
 */
export const getPoints = async (): Promise<google.maps.LatLng[]> => {
  const resp = await axiosInstance.get<OpticWithLeadsResponse>(
    'optics-lead/georeference-lead'
  );
  // TODO: Send petition to the server to get the optics data

  const { data: opticsData } = resp.data;

  let points: google.maps.LatLng[] = [];
  opticsData.forEach((optic) => {
    points = points.concat(
      generateRandomPoints(
        optic.latitude,
        optic.longitude,
        optic.countLeads,
        500
      )
    ); // 3000 meters radius
  });

  return points;
};
