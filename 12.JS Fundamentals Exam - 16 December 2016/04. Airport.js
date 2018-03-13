function solve(arr) {
    let planes = new Map();
    let airports = new Map();

    for (let i = 0; i < arr.length; i++) {
        let [planeId, town, passengersCount, action] = arr[i].split(/\s+/);
        passengersCount = Number(passengersCount);
        if (!planes.has(planeId)){
            if (action !== 'depart'){
                planes.set(planeId, action);
                if (!airports.has(town)){
                    let obj = {arrivals: passengersCount, departures: 0, planeses: new Set() };
                    obj.planeses.add(planeId);
                    airports.set(town, obj);
                } else {
                    let oldObj = airports.get(town);
                    action === 'land' ? oldObj.arrivals += passengersCount : oldObj.departures += passengersCount;
                    oldObj.planeses.add(planeId);
                    airports.set(town, oldObj);
                }
            }
        } else {
            if (planes.get(planeId) !== action){
                planes.set(planeId, action);
                if (!airports.has(town)){
                    let obj = {arrivals: 0, departures: 0, planeses: new Set() };
                    action === 'land' ? obj.arrivals += passengersCount : obj.departures += passengersCount;
                    obj.planeses.add(planeId);
                    airports.set(town, obj);
                } else {
                    let oldObj = airports.get(town);
                    action === 'land' ? oldObj.arrivals += passengersCount : oldObj.departures += passengersCount;
                    oldObj.planeses.add(planeId);
                    airports.set(town, oldObj);
                }
            }
        }
    }

    //[...planes].sort((a, b) => a[0].localeCompare(b[0]));
    console.log('Planes left:');
    for (let [plane, act] of [...planes].sort((a, b) => a[0].localeCompare(b[0]))){
        if (act != 'depart') {
            console.log(`- ${plane}`);
        }
    }
    //[...airports].sort((a, b) => b[1].arrivals - a[1].arrivals === 0 ? a[0].localeCompare(b[0]) : b[1].arrivals - a[1].arrivals);
    for (let [town, obj1] of [...airports].sort((a, b) => b[1].arrivals - a[1].arrivals === 0 ? a[0].localeCompare(b[0]) : b[1].arrivals - a[1].arrivals)){
        console.log(town);
        console.log(`Arrivals: ${obj1.arrivals}`);
        console.log(`Departures: ${obj1.departures}`);
        console.log('Planes:');
        for (let plan of [...obj1.planeses].sort((a, b) => a.localeCompare(b))){
            console.log(`-- ${plan}`);
        }
    }
}

solve([
'RTA72 London -10 land',
'RTA#72 Brussels -110 depart',
'RTA7!2 Warshaw 350 land',
'RTA72 Riga -201 depart',
'rta72 riga -13 land',
'rta Riga -200 depart']);