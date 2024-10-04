
export function saveVisitedCity(cityId) {
    let visitedCities = JSON.parse(localStorage.getItem("visitedCities")) || [];
    if (!visitedCities.includes(cityId)) {
        visitedCities.push(cityId);
    }
    localStorage.setItem("visitedCities", JSON.stringify(visitedCities));
}

export function clearVisitedCities() {
    localStorage.removeItem("visitedCities");
}

export function getVisitedCities() {
    return JSON.parse(localStorage.getItem("visitedCities")) || [];
}

export function showVisitedCities(visitedPage, stad, ul, visitedLink, cityInfo) {
    visitedPage.innerHTML = "";
    let visitedCities = getVisitedCities();
    let totalPopulation = 0;

    if (visitedCities.length === 0) {
        visitedPage.innerText = "Du har inte besökt några städer!";
    }
    else {
        let visitedUl = document.createElement("ul");
        visitedCities.forEach((cityId) => {
            let city = stad.find((c) => c.id === cityId);
            if (city) {
                totalPopulation += city.population;
                let li = document.createElement("li");
                li.innerText = `${city.stadname} (invånare: ${city.population})`;
                visitedUl.appendChild(li);
            }
        });
        visitedPage.appendChild(visitedUl);

        let totalPopulationInfo = document.createElement("p");
        totalPopulationInfo.innerText = `Totalt antal invånare i städerna du besökt är: ${totalPopulation}`;
        visitedPage.appendChild(totalPopulationInfo);
    }

    let clearButton = document.createElement("button");
    clearButton.innerText = "Rensa historik";
    clearButton.addEventListener("click", () => {
        clearVisitedCities();
        showVisitedCities(visitedPage, stad, ul, visitedLink, cityInfo);
    });

    visitedPage.appendChild(clearButton);

    let backButton = document.createElement("button");
    backButton.innerText = "Tillbaka";
    backButton.addEventListener("click", () => {
        ul.style.display = "block";
        visitedPage.style.display = "none";
        visitedLink.style.display = "block";
        cityInfo.style.display = "block";
        cityInfo.innerHTML = "";
        
    });
    visitedPage.appendChild(backButton);
}