export default fetchCountries;

function fetchCountries(searchQuery, callback){
    const baseUrl = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    fetch(baseUrl).then(response => {
        return response.json();
    }).then(data =>{
        callback(data);
    })
}

// const baseUrl = 'https://restcountries.eu/rest/v2/name/';

// export default function fetchCountries(searchQuery) {
//     const enteredCountry = baseUrl + searchQuery;
//     return fetch(enteredCountry).then(response => {
        
//       return response.json(),
//       console.log(response);
      
//     });
//   }
// //   console.log(enteredCountry)
// //   console.log(response)