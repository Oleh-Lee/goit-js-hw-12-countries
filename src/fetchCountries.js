export default fetchCountries;

function fetchCountries(searchQuery, callback) {
  const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  fetch(baseUrl)
    .then(response => {
      return response.json();
    })
    .then(data => {
      callback(data);
    });
}
