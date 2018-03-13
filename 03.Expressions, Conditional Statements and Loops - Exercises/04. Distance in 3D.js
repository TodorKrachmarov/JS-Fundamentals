function solve(input) {
    let poitA = {x: input[0], y: input[1], z: input[2]};
    let poitB = {x: input[3], y: input[4], z: input[5]};

    let dist = Math.sqrt(Math.pow(poitB.x - poitA.x, 2) +
                         Math.pow(poitB.y - poitA.y, 2) +
                         Math.pow(poitB.z - poitA.z, 2));

    console.log(dist);
}

solve([1, 1, 0, 5, 4, 0]);