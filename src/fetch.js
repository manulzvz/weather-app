export function getTempCelsius() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saltillo?unitGroup=metric&key=KWKDBKB9A86UU2GHZ5LF9H6PL&contentType=json",
    {
      method: "GET",
      mode: "cors",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.currentConditions.temp);
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getTempFahrenheit() {
  fetch(
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Saltillo?unitGroup=us&key=KWKDBKB9A86UU2GHZ5LF9H6PL&contentType=json",
    {
      method: "GET",
      mode: "cors",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.currentConditions.temp);
    })
    .catch((err) => {
      console.error(err);
    });
}