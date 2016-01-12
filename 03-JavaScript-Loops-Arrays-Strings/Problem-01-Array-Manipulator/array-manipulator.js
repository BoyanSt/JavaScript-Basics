function arrManipulate() {
    var input = ["Pesho", 2, "Gosho", 12, 2, "true", 9,
        undefined, 0, "Penka", {bunniesCount: 10}, [10, 20, 30, 40]];

    var arrStringsRemoved = input.filter(removeStrings);

    var sortedArray = arrStringsRemoved.sort(function (a, b) {
        return b - a;
    });

    var maxNumber = sortedArray[0];
    var minNumber = sortedArray[sortedArray.length - 1];
    var mostFrequentNumber = findMostFrequentElement(sortedArray);

    function removeStrings(element) {
        return typeof element === 'number';
    }

    function findMostFrequentElement(array) {
        var maxFrequent = 0;
        var maxElementPosition = 0;

        for (var i = 0; i < array.length - 1; i++) {
            var currNumber = array[i];
            var currFrequent = 0;

            for (var j = i + 1; j < array.length; j++) {
                var nextNumber = array[j];
                if (currNumber === nextNumber) {
                    currFrequent++;
                }
            }
            if (maxFrequent < currFrequent) {
                maxFrequent = currFrequent;
                maxElementPosition = i;
            }
        }
        return array[maxElementPosition];
    }

    var output = "Min number: " + minNumber + "<br>" + "Max number: " + maxNumber + "<br>" +
        "Most frequent number: " + mostFrequentNumber + "<br>" + "Array: " + sortedArray.toString();

    document.getElementById("output-data").innerHTML = output;

}