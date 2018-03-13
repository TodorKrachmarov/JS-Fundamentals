function solve(arr) {
    const CrewConsumption = 26;
    let yield = Number(arr[0]);
    let stored = 0;
    let days = 0;

    while (yield >= 100){
        days++;
        stored += yield - CrewConsumption;
        yield -= 10;
    }

    if (stored >= CrewConsumption){
        console.log(days);
        console.log(stored - CrewConsumption);
    } else {
        console.log(days);
        console.log(stored);
    }
}

solve(['200']);