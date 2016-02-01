var input = ['Array Matcher & strings & 4 & 100 & 38',
    'Magic Wand & draw & 3 & 100 & 15',
    'Dream Item & loops & 2 & 88 & 80',
    'Knight Path & bits & 5 & 100 & 65',
    'Basket Battle & conditionals & 2 & 100 & 120',
    'Torrent Pirate & calculations & 1 & 100 & 20',
    'Encrypted Matrix & nested loops & 4 & 90 & 52',
    'Game of bits & bits & 5 & 100 & 18',
    'Fit box in box & conditionals & 1 & 100 & 95',
    'Disk & draw & 3 & 90 & 15',
    'Poker Straight & nested loops & 4 & 40 & 57',
    'Friend Bits & bits & 5 & 100 & 81'];

solve(input);

function solve(args) {
    var result = {};

    args.forEach(function (line) {
        var inputData = line.trim().split(' & '),
            name = inputData[0],
            type = inputData[1],
            taskNumber = 'Task ' + inputData[2],
            score = Number(inputData[3]),
            lineCode = Number(inputData[4]);

        if (!result[taskNumber]) {
            result[taskNumber] = {'tasks': [], 'average': 0, 'lines': 0};
        }
        result[taskNumber].average += score;
        result[taskNumber].lines += lineCode;
        result[taskNumber].tasks.push({'name': name, 'type': type});
    });

    for (var element in result) {
        result[element].tasks.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        });
        result[element].average = Number((result[element].average/result[element].tasks.length).toFixed(2));
    }

    var outputSortedResult = {};

    var out = Object.keys(result).sort(function(a,b){
        return result[b].average - result[a].average || result[a].lines - result[b].lines;
    });

    out.forEach(function(key){
        outputSortedResult[key] = result[key];
    });

    console.log(JSON.stringify(outputSortedResult));
}

