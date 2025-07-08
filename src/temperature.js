// temperature.js
let isCelsius = true;

export function toggleTemperatureUnit() {
  isCelsius = !isCelsius;
  return isCelsius;
}

export function getIsCelsius() {
  return isCelsius;
}
