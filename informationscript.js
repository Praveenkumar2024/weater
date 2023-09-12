function information() {
    
    const apiUrl = 'https://restcountries.com/v3.1/name';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const countryName = data[0].name.common;
        const capital = data[0].capital;
        const population = data[0].population;
        const countryInfoContainer = document.querySelector('.country-info');
        countryInfoContainer.innerHTML = `
          <h2>${countryName}</h2>
          <p>Capital: ${capital}</p>
          <p>Population: ${population}</p>
        `;
      })
      .catch((error) => {
        console.error('There was a problem fetching country data:', error);
      });
  }
  information();