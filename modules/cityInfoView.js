import { saveVisitedCity } from "./visitedCities.js";

export function renderCityInfo(city, cityInfo) {
    cityInfo.innerHTML = "";

    let cityName = document.createElement("h3");
    cityName.innerText = `Stad: ${city.stadname}`;
    let cityPopulation = document.createElement("P");
    cityPopulation.innerText = `Invånare: ${city.population}`;

    let visitedButton = document.createElement("button");
    visitedButton.innerText = "Besökt";
    visitedButton.addEventListener("click", () => {
        saveVisitedCity(city.id);
    });

    cityInfo.appendChild(cityName);
    cityInfo.appendChild(cityPopulation);
    cityInfo.appendChild(visitedButton);
}