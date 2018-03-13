function solve(arr) {
    let purchases = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i+=2) {
        purchases.push(arr[i]);
        sum += Number(arr[i + 1]);
    }

    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${sum}`);
}

solve(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']);