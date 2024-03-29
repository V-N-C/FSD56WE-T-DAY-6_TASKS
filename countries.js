// Import the xhr2 package
const XMLHttpRequest = require('xhr2');

// Create an instance/object of XMLHttpRequest
const xhr = new XMLHttpRequest();

// Open the request
xhr.open('GET', 'https://restcountries.com/v3.1/all');

// Send the request
xhr.send();

// Listen for the response
xhr.onload = function() {
    let countries = JSON.parse(xhr.responseText)

    //Aswers are below:
    

    // GET all the countries from Asia continent /region using Filter function
    //Answer:
    //let countries = JSON.parse(xhr.responseText)
    // countries.map(function (region) {
    //     console.log(region.name.common)
    //     })

    // Get all the countries with a population of less than 2 lakhs using Filter function
    //Answer:
    // const lowPopulationCountries = countries.filter((country) => country.population < 200000);   
    // lowPopulationCountries.forEach((country) => {
    // console.log(`Name: ${country.name.common}`);
    // });

    // Print the following details name, capital, flag, using forEach function
    //Answer:
    // countries.forEach(country => {
    //     console.log("Counrty is" +" "+ country.name.common),
    //     console.log("Capital is" +" "+country.capital),
    //     console.log("Flag is" +" "+country.flag)
    //     }
    // );

    // Print the total population of countries using reduce function
    //Answer:
    // const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    // console.log(`Total population: ${totalPopulation}`);

    // Print the country that uses US dollars as currency.
    //Answer:
    // countries.forEach((country) => {
    //     if (Object.keys(country.currencies).includes('USD')) {
    //       console.log(country.name.common);
    //     }
    //   });
}