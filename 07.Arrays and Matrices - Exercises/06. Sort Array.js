function solve(arr) {
    function sort(a, b) {
        let comparison = 0;

        if (a.length > b.length) {
            comparison = 1;
        } else if (b.length > a.length) {
            comparison = -1;
        } else if (comparison == 0){
            return a.toLowerCase().localeCompare(b.toLowerCase());
        }

        return comparison;
    }

    arr.sort(sort);

    console.log(arr.join('\n'))
}