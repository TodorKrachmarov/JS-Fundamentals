function solve(day) {
    var week = {'monday': 1, 'tuesday': 2, 'wednesday': 3, 'thursday': 4, 'friday': 5, 'saturday': 6, 'sunday': 7};

    console.log(week[day.toLowerCase()] != undefined ? week[day.toLowerCase()] : 'error');
}

solve('MoNday');