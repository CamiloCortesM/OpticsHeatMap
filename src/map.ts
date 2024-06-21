import { opticsData } from './data';

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

const initMap = (): void => {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    zoom: 13,
    center: { lat: 37.775, lng: -122.434 },
    mapTypeId: 'satellite',
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
};

const toggleHeatmap = (): void => {
  heatmap.setMap(heatmap.getMap() ? null : map);
};

const changeGradient = (): void => {
  const gradient = [
    'rgba(0, 255, 255, 0)', // Transparente
    'rgba(0, 255, 255, 1)', // Cian
    'rgba(0, 191, 255, 1)', // Azul claro
    'rgba(0, 127, 255, 1)', // Azul medio
    'rgba(0, 63, 255, 1)', // Azul oscuro
    'rgba(0, 0, 255, 1)', // Azul
    'rgba(63, 0, 91, 1)', // Azul muy oscuro
    'rgba(127, 0, 63, 1)', // Morado
    'rgba(191, 0, 31, 1)', // Rojo oscuro
    'rgba(255, 0, 0, 0.6)', // Rojo con transparencia
    'rgba(255, 0, 0, 0.8)', // Rojo con menos transparencia
    'rgba(255, 0, 0, 1)', // Rojo sólido
  ];

  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
};

const changeRadius = (radius: number): void => {
  console.log(radius);
  heatmap.set('radius', radius);
};

const generateRandomPoints = (
  latitude: number,
  longitude: number,
  numPoints: number,
  radius: number
) => {
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

const changeOpacity = (opacity: number): void => {
  console.log(opacity);
  heatmap.set('opacity', opacity * 0.01);
};

const getPoints = () => {
  let points: google.maps.LatLng[] = [];
  opticsData.forEach((optic) => {
    points = points.concat(
      generateRandomPoints(optic.latitude, optic.longitude, optic.numLeads, 3000)
    ); // 3000 metros de radio
  });
  return points;
};

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

export { toggleHeatmap, changeGradient, changeRadius, changeOpacity };
