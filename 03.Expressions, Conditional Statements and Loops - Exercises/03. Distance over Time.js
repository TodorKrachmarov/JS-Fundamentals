function solve(input) {
    let speedA = input[0];
    let speedB = input[1];
    let time = input[2] / 3600;

    let distA = speedA * time;
    let distB = speedB * time;

    console.log(Math.abs((distA - distB) * 1000));
}

solve([0, 60, 3600]);