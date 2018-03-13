function leep(year) {
    let leep = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);

    console.log(leep ? 'yes' : 'no');
}

leep(1900);