

var firstInputArray = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var secondInputArray = ['hi', 'bye', 'hello' ];

Object.prototype.removeItem = function (value) {

    var outputArray = [];
    for (var item in this) {
        if (this[item] !== value) {
            outputArray.push(this[item]);
        }
    }
    return outputArray;
};


console.log(firstInputArray.removeItem(1));
console.log(secondInputArray.removeItem('bye'));