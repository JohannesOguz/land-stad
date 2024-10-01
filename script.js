Promise.all([
    fetch("land.json").then((res) => res.json()),
    fetch("stad.json").then((res) => res.json())
])
.then((data) => {
    console.log("data", data);
})