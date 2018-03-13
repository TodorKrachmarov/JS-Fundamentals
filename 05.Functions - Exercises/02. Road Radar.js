function solve(input) {
    let speedLimit = {motorway: 130, interstate: 90, city: 50, residential: 20};

    let speed = input[0];
    let place =input[1];
    if (speed > speedLimit[place]){
        let speeding = speed - speedLimit[place];

        if (speeding <= 20){
            console.log('speeding');
        } else if (speeding <= 40){
            console.log('excessive speeding');
        } else if (speeding > 40){
            console.log('reckless driving');
        }
    }
}

solve([40, city]);