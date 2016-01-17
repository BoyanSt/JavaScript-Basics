

var inputArr = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

console.log('The youngest person is ' + findYoungestPerson(inputArr));

function findYoungestPerson(array){
    var peopleWithSmartphone = filterPeopleWithSmartphone(array);
    var peopleWithSmartphoneByAge = peopleWithSmartphone.sort(function(a,b){
        return Number(a.age) - Number(b.age);
    });
    var youngestPerson = peopleWithSmartphoneByAge[0];

    return youngestPerson.firstname + " " + youngestPerson.lastname;
}

function filterPeopleWithSmartphone(array){
    var outputArr = [];
    for (var person in array) {
        if (array[person].hasSmartphone) {
            outputArr.push(array[person]);
        }
    }
    return outputArr;
}