
function global(){
    var stringInput = document.getElementById('string-input').value;
    var booleanInput = (document.getElementById('boolean-input').value === 'true');

    document.getElementById('output-string').innerHTML = sortLetters(stringInput, booleanInput);

    function sortLetters(letters, sortType) {
        var sortedString = "";
        if (sortType) {
            sortedString = letters.split('').sort(function (a, b) {
                return a.toLowerCase() > b.toLowerCase();
            })
        } else {
            sortedString = letters.split('').sort(function (a, b) {
                return a.toLowerCase() < b.toLowerCase();
            })
        }

        return sortedString.join('');
    }
}
