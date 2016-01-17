

var firstObject = {name: 'Pesho', age: 21};
var copyFirstObject = clone(firstObject); // deep copy
console.log( 'a == b --> ' + compareObjects(firstObject,copyFirstObject));
copyFirstObject.name = 'Ivan';
copyFirstObject.age = '32';

console.log(firstObject);
console.log(copyFirstObject);

var secondObject = {name: 'Pesho', age: 21} ;
var copySecondObject = secondObject; // not a deep copy
console.log('a == b --> ' + compareObjects(secondObject, copySecondObject));
copySecondObject.name = 'Maria';
copySecondObject.age = 10;
console.log(secondObject);
console.log(copySecondObject);

function clone(obj) {
    if (null == obj || "object" != typeof obj){
        return obj;
    }
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) {
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

function compareObjects(obj, copyObj){
    return obj == copyObj;
}
