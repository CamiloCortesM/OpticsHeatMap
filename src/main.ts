import './styles/main.css';
import {
  initMap,
  changeGradient,
  changeRadius,
  changeOpacity,
  toggleHeatmap,
} from './maps';

document
  .getElementById('toggle-heatmap')!
  .addEventListener('click', toggleHeatmap);
document
  .getElementById('change-gradient')!
  .addEventListener('click', changeGradient);

document.getElementById('opacity-range')!.addEventListener('input', (event) => {
  const target = event.target as HTMLInputElement;
  changeOpacity(parseInt(target.value));
});

document.getElementById('radius-range')!.addEventListener('input', (event) => {
  const target = event.target as HTMLInputElement;
  changeRadius(parseInt(target.value));
});

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
