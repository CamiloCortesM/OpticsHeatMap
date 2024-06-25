import { getPoints } from './utils';

let map: google.maps.Map;
let heatmap: google.maps.visualization.HeatmapLayer;

/**
 * Initializes the Google Map and the Heatmap Layer.
 */
export const initMap = (): void => {
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

/**
 * Toggles the heatmap on and off.
 */
export const toggleHeatmap = (): void => {
  heatmap.setMap(heatmap.getMap() ? null : map);
};

/**
 * Changes the gradient of the heatmap.
 */
export const changeGradient = (): void => {
  const gradient = [
    'rgba(0, 255, 255, 0)', 
    'rgba(0, 255, 255, 1)', 
    'rgba(0, 191, 255, 1)', 
    'rgba(0, 127, 255, 1)', 
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)', 
    'rgba(63, 0, 91, 1)', 
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 0.6)', 
    'rgba(255, 0, 0, 0.8)', 
    'rgba(255, 0, 0, 1)', 
  ];

  heatmap.set('gradient', heatmap.get('gradient') ? null : gradient);
};

/**
 * Changes the radius of the heatmap points.
 * 
 * @param radius - The new radius for the heatmap points.
 */
export const changeRadius = (radius: number): void => {
  heatmap.set('radius', radius);
};

/**
 * Changes the opacity of the heatmap.
 * 
 * @param opacity - The new opacity for the heatmap, as a percentage (0-100).
 */
export const changeOpacity = (opacity: number): void => {
  heatmap.set('opacity', opacity * 0.01);
};
