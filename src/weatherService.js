// weatherService.js
import { fetchWeatherData } from './fetch.js';
import { getIsCelsius } from './temperature.js';

let currentWeatherData = null;

export async function searchWeather(locationInput, updateUI, setLoadingState, resetButton) {
  const location = locationInput.value.trim();
  if (!location) return;

  setLoadingState(true);

  try {
    const unit = getIsCelsius() ? 'metric' : 'us';
    const weather = await fetchWeatherData(location, unit);
    currentWeatherData = weather;
    updateUI(currentWeatherData);
  } catch (err) {
    alert('Unable to retrieve weather data. Please try again.');
  } finally {
    setLoadingState(false);
    resetButton();
  }
}

export function getCurrentWeather() {
  return currentWeatherData;
}
