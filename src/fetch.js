// fetch.js
const API_KEY = 'KWKDBKB9A86UU2GHZ5LF9H6PL';
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

export async function fetchWeatherData(location, unit = 'metric') {
  const url = `${BASE_URL}/${encodeURIComponent(location)}?unitGroup=${unit}&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      headers: {},
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    return {
      location: data.resolvedAddress,
      temperature: data.currentConditions.temp,
      condition: data.currentConditions.conditions
    };
  } catch (error) {
    console.error('Weather fetch error:', error);
    throw error;
  }
}
