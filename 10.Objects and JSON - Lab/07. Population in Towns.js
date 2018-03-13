function solve(arr) {
    let towns = new Map;
    for (let i = 0; i < arr.length; i++) {
        let [town, population] = arr[i].split(/\s*<->\s*/);
        towns.has(town) ? towns.set(town, towns.get(town) + Number(population)) : towns.set(town, Number(population));
    }

    [...towns].forEach((t) => console.log(`${t[0]} : ${t[1]}`));
}

solve([
'Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);