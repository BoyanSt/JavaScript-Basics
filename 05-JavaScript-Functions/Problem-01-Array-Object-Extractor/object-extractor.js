

var arrToFilter = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

var filteredArray = extractObjects(arrToFilter);
console.log(filteredArray);

function extractObjects(array){
    var sortedArray = [];
    for (var element in array) {
        if ( array[element].constructor === Object) {
            sortedArray.push(array[element]);
        }
    }
    return sortedArray;
}