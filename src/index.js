// index.js
import "./styles.css"

import {
  locationInput,
  searchButton,
  tempToggle
} from './dom.js';

import { searchWeather, getCurrentWeather } from './weatherService.js';
import { displayWeather, updateToggleUI, setLoadingState } from './ui.js';
import { toggleTemperatureUnit, getIsCelsius } from './temperature.js';

// Handle search logic
async function onSearch() {
  await searchWeather(
    locationInput,
    displayWeather,
    (loading) => setLoadingState(loading, searchButton),
    () => setLoadingState(false, searchButton)
  );
}

// Handle temperature unit toggle
function onToggle() {
  const isCelsius = toggleTemperatureUnit();
  updateToggleUI(isCelsius);

  const currentData = getCurrentWeather();
  if (currentData) {
    onSearch(); // re-fetch with the new unit
  }
}

// Event listeners
searchButton.addEventListener('click', onSearch);
tempToggle.addEventListener('click', onToggle);

locationInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    onSearch();
  }
});

// Prevent form submission on Enter
locationInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});
