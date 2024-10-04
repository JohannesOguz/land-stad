export async function fetchData() {
    const landData = await fetch("land.json").then((res) => res.json());
    const stadData = await fetch("stad.json").then((res) => res.json());
    return [landData, stadData];
}