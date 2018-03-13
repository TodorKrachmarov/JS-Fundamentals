function solve(arr) {
    const DaylyConcretaUseByOneCrew = 195;
    const OneCubicConcreteCost = 1900;
    let totalCost = 0;
    let workCrews = arr.map(Number).filter(a => a < 30);
    let workDaysConcrete = [];

    while (workCrews.length > 0){
        workDaysConcrete.push(DaylyConcretaUseByOneCrew * workCrews.length);
        for (let i = 0; i < workCrews.length; i++) {
            workCrews[i]++;
        }
        totalCost += (DaylyConcretaUseByOneCrew * workCrews.length) * OneCubicConcreteCost;
        workCrews = workCrews.filter(a => a < 30);
    }

    console.log(workDaysConcrete.join(', '));
    console.log(totalCost + ' pesos');
}

solve(['21', '25', '28']);