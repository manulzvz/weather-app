export function getData() {
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
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
