
var arrayPersons = [];

function addPerson(){

    var inputFirstName = document.getElementById('first-name').value,
        inputLastName = document.getElementById('last-name').value,
        inputAge = document.getElementById('age').value;

    var currPerson = buildPerson(inputFirstName, inputLastName, inputAge);
    arrayPersons.push(currPerson);
    document.getElementById('first-name').value = "";
    document.getElementById('last-name').value = "";
    document.getElementById('age').value = "";
}

function buildPerson(personFirstName, personLastName, personAge){
    return{
        firstName : personFirstName,
        lastName : personLastName,
        age : personAge
    }
}

 function groupBy(collection, property) {
     'use strict';
     var group = {};

     collection.forEach(function(item) {
         if (group[item[property]]) {
             group[item[property]].push(item);
                   } else {
             group[item[property]] = [item];
                   }
             });
     return group;
 }

function groupByAge(){
    console.log(groupBy(arrayPersons, 'age'));
    document.getElementById('output-data').innerHTML = "Look in the console for the result";
}

function groupByFirstName(){
    console.log(groupBy(arrayPersons, 'fname'));
}

function groupByLastName(){
    console.log(groupBy(arrayPersons, 'lname'));
}
