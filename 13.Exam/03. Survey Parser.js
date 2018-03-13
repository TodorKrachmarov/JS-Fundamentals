function solve(str) {
    let match = /<svg>(.|\n)+<\/svg>/g.exec(str);
    let label = '';
    let result = 0;
    if (match === null){
        console.log('No survey found');
    } else {
        let survey = match[0];
        //console.log(survey);
        let labelMatch = /\n*<cat>\n*\s*<text>\s*(?:.|\n)+(?:\[(.+|\n)\])\n*\s*<\/text>\n*\s*<\/cat>\n*/g.exec(survey);
        if (labelMatch === null){
            console.log('Invalid format');
        } else {
            label = labelMatch[1];
            //console.log(label);
            let ratingsToMatch = /\n*\s*<cat>(\n*\s*<g>\n*\s*<val>\n*\s*(1|2|3|4|5|6|7|8|9|10)\n*\s*<\/val>\n*\s*[\d]+\n*\s*<\/g>\n*\s*)+<\/cat>/g.exec(survey);
            if (ratingsToMatch === null){
                console.log('Invalid format');
            } else {
                let ratings = ratingsToMatch[0];
                //console.log(ratings)
                let regex = /<g>\n*\s*<val>\n*\s*(1|2|3|4|5|6|7|8|9|10)\n*\s*<\/val>\n*\s*([\d]+)\n*\s*<\/g>/g;
                let match = regex.exec(ratings);
                let sum = 0;
                let votesCount = 0;
                while (match !== null){
                    let value = Number(match[1]);
                    let votes = Number(match[2]);
                    sum += (votes * value);
                    votesCount += votes;
                    match = regex.exec(ratings);
                }
                result = sum / votesCount;
                console.log(`${label}: ${Number(result.toFixed(2))}`);
            }
        }
    }
}

//solve('<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>');
//solve('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')
//solve('<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>')
solve('<p>Our guests may enjoy a special menu of freshly caught seafood.</p>\n' +
    '<br>\n' +
    '<svg>\n' +
    '<cat><text>How do you rate the special menu? [Food - Special]</text></cat> \n' +
    '<cat>\n' +
    '<g><val>1</val>5</g>\n' +
    '<g><val>5</val>13</g>\n' +
    '<g><val>10</val>22</g>\n' +
    '</cat>\n' +
    '</svg>')