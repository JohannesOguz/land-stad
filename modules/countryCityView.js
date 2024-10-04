import { renderCityInfo } from "./cityInfoView.js";

export function renderCountriesCities(land, stad, ul, cityInfo) {
  land.forEach((land) => {
    let li = document.createElement("li");
    li.innerText = land.countryname;
    li.style.fontWeight = "bold";

    li.addEventListener("click", () => {
      let existingUl = li.querySelector("ul");

      if (existingUl) {
        li.removeChild(existingUl);
      } else {
        let cityUl = document.createElement("ul");
        let useCites = stad.filter((city) => city.countryid == land.id);

        useCites.forEach((city) => {
          let cityLi = document.createElement("li");
          cityLi.innerText = city.stadname;

          cityLi.addEventListener("click", () => {
            renderCityInfo(city, cityInfo);
          });
          cityUl.appendChild(cityLi);
        });
        li.appendChild(cityUl);
      }
    });
    ul.appendChild(li);
  });
}
