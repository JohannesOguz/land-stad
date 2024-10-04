import { fetchData } from "./modules/fetch.js";
import { renderCountriesCities } from "./modules/countryCityView.js";
import { showVisitedCities } from "./modules/visitedCities.js";

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData();
    const land = data[0];
    const stad = data[1];

    let ul = document.createElement("ul");
    let cityInfo = document.createElement("div");
    let visitedPage = document.createElement("div");

    visitedPage.style.display = "none";
    cityInfo.id = "city.info";
    document.getElementById("root").appendChild(cityInfo);
    document.getElementById("root").appendChild(visitedPage);

    renderCountriesCities(land, stad, ul, cityInfo);

    let visitedLink = document.createElement("a");
    visitedLink.href = "#";
    visitedLink.innerText = "Besökta städer";
    visitedLink.style.display = "block";
    visitedLink.style.display = "20px";

    visitedLink.addEventListener("click", () => {
        ul.style.display = "none";
        visitedPage.style.display = "block";
        visitedLink.style.display = "none";
        cityInfo.style.display = "none";
        showVisitedCities(visitedPage, stad, ul, visitedLink, cityInfo);
    });
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(visitedLink);
    document.getElementById("root").appendChild(visitedPage);
});