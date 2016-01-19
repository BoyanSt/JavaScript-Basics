function Solve(args) {

    var pattern = /[+-]?[0-9]*\.?[0-9]+/g,
        lineMatches = undefined,
        elementsMaxSum = [],
        maxSum = -9007199254740991,
        isDataFound = false;

    for (var i = 2; i < args.length - 1; i++) {
        var line = args[i];
        var currSum = 0;

        lineMatches = line.match(pattern);

        for (var num in lineMatches) {
            currSum += Number(lineMatches[num]);
            isDataFound = true;
        }
        if (currSum > maxSum) {
            maxSum = currSum;
            elementsMaxSum = lineMatches;
        }
    }

    if (isDataFound) {
        console.log(maxSum + ' = ' + elementsMaxSum.join(' + '));
    } else {
        console.log('no data');
    }
}
