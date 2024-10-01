//Anväder Promise.all för att hämta json filerna
Promise.all([
  fetch("land.json").then((res) => res.json()),
  fetch("stad.json").then((res) => res.json()),
])

.then((data) => {
  console.log("data", data);

  const land = data[0];
  const stad = data[1];

  let ul = document.createElement("ul");

  land.forEach((land) => {
    let li = document.createElement("li");
    li.innerText = land.countryname;
    li.style.fontWeight = "bold";

    ul.appendChild(li);

  });

  document.getElementById("root").appendChild(ul);

});
