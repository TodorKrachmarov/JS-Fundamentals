function solve(arr) {
    arr.shift();
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let [town, lat, long] = arr[i].split(/\s*\|\s*/).filter(a => a != '');
        result.push({Town: town, Latitude: Number(lat), Longitude: Number(long)});
    }

    console.log(JSON.stringify(result));
}

solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);