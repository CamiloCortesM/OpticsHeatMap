import { opticsData } from '../data/opticsData';

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

export const getPoints = (): google.maps.LatLng[] => {
  let points: google.maps.LatLng[] = [];
  opticsData.forEach((optic) => {
    points = points.concat(
      generateRandomPoints(optic.latitude, optic.longitude, optic.numLeads, 3000)
    ); // 3000 metros de radio
  });
  return points;
};
