import { opticsData } from '../data/opticsData';

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
    points.push(
      new google.maps.LatLng(latitude + offsetLat, longitude + offsetLng)
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
export const getPoints = (): google.maps.LatLng[] => {

  // TODO: Send petition to the server to get the optics data

  let points: google.maps.LatLng[] = [];
  opticsData.forEach((optic) => {
    points = points.concat(
      generateRandomPoints(optic.latitude, optic.longitude, optic.numLeads, 3000)
    ); // 3000 meters radius
  });
  return points;
};
