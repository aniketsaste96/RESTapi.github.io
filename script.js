//Global Variables;

const countriesList = document.getElementById("countries");
let countries;//will contain "fetched" data

countriesList.addEventListener("change", (event => displayCountryInfo(event.target.value))
    // console.log;
)



//EVENT LISTENERS TO FETHC NEW DATA WHEN WE SELECT PARTICULAR OPTION

/* fetch("https://restcountries.com/v2/all")
    .then(function (res) {
        // console.log(res.json());

        return res.json();

    })
    .then(function (data) {
        // console.log(data);
        initialize(data);

    })
    .catch(function (err) {
        console.log("Error:", err);
    }) */
fetch("https://restcountries.com/v2/all")
    .then(res => res.json())
    .then(data => initialize(data))
    .catch(err => console.log("Error:", err))

function initialize(countriesData) {
    // console.log(countriesData);
    countries = countriesData;
    let options = "";
    // for (let i = 0; i < countries.length; i++) {
    //     options += `<option value="${countries[i].alpha3Code}">${countries[i].name} (+${countries[i].callingCodes[0]})</option>`;
    // }

    countries.forEach(country => options += `<option value="${country.alpha3Code}">${country.name} (+${country.callingCodes[0]})</option>`);

    // console.log(`capital of ${countries[0].name} is ${countries[0].capital}`);
    // document.getElementById("countries").innerHTML = options;
    // document.querySelector("#countries").innerHTML = options;
    //declare const once to avoid lenghy coding 
    countriesList.innerHTML = options;
    // console.log(countriesList.value);
    // console.log(countriesList.length);
    // console.log(countriesList.selectedIndex);
    // console.log(countriesList[249]);
    // console.log(countriesList[10].value);
    // console.log(countriesList[10].text);
    countriesList.selectedIndex = Math.floor(Math.random() * countriesList.length);
    displayCountryInfo(countriesList[countriesList.selectedIndex]);
}


function displayCountryInfo(countryByAlpha3Code) {
    const countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
    // console.log(countryData);  TO SEE IN CONSOLE WHATS HAPPENING
    document.querySelector("#flag-container img").src = countryData.flag;
    // document.querySelector("#flag-container ").alt = `flag of ${countryData.name}`;
    document.getElementById("capital").innerHTML = countryData.capital;
    document.getElementById("dialing-code").innerHTML = `+${countryData.callingCodes[0]}`;
    document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
    document.getElementById("currancies").innerHTML = countryData.currencies.map(c => `${c.name} (${c.code})`).join(", ")
    document.getElementById("region").innerHTML = countryData.region;
    document.getElementById("sub-region").innerHTML = countryData.subregion;



}
