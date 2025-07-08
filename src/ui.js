// ui.js
import {
  weatherCard,
  emptyState,
  weatherLocation,
  weatherCondition,
  weatherTemperature,
  weatherUnit,
  tempToggle,
  celsiusLabel,
  fahrenheitLabel
} from './dom.js';

import { getIsCelsius } from './temperature.js';

export function displayWeather(currentWeatherData) {
  if (!currentWeatherData) return;

  weatherLocation.textContent = currentWeatherData.location;
  weatherCondition.textContent = currentWeatherData.condition;
  weatherTemperature.textContent = `${Math.round(currentWeatherData.temperature)}°`;
  weatherUnit.textContent = getIsCelsius() ? 'Celsius' : 'Fahrenheit';

  weatherCard.classList.add('show');
  emptyState.classList.add('hide');
}

export function updateToggleUI(isCelsius) {
  if (isCelsius) {
    tempToggle.classList.remove('active');
    celsiusLabel.classList.remove('inactive');
    fahrenheitLabel.classList.add('inactive');
  } else {
    tempToggle.classList.add('active');
    celsiusLabel.classList.add('inactive');
    fahrenheitLabel.classList.remove('inactive');
  }
}

export function setLoadingState(isLoading, buttonElement) {
  if (isLoading) {
    buttonElement.innerHTML = `
      <div class="loading-spinner"></div>
      Searching...
    `;
    buttonElement.disabled = true;
  } else {
    buttonElement.innerHTML = `
      <svg class="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
      </svg>
      Get Weather
    `;
    buttonElement.disabled = false;
  }
}
