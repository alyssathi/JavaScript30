const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cityArray = [];

fetch(endpoint)
.then((response =>response.json()))
.then((data)=> cityArray.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // does city/state match what was searched?
        //REGEX create variable
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  

function displayMatches() {
    const matchArray = findMatches(this.value, cityArray);
    
    const html = matchArray.map(place => {

        //replacing the searched value with a searched value with a class of highlight
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`)
        const stateName = place.city.replace(regex, `<span class = "hl">${this.value}</span>`)

        //returns only the array elements that match the search bar
        return `
        <li>
            <span class = "name">${cityName}, ${stateName}</span>
            <span class = "population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join("")

    //places the above into the <li></li> of the HTML to make it viewable
    suggestions.innerHTML = html;
}

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

search.addEventListener('change', displayMatches);
search.addEventListener('keyup', displayMatches);