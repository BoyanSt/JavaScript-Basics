/**
 * Created by boyan on 1/8/2016.
 */

function calcSupply(){
    var currAge = document.getElementById("curr-age").value,
        maxAge = document.getElementById("max-age").value,
        foodName = document.getElementById("favorite-food").value,
        foodQuantityPerDay = document.getElementById("food-per-day").value;

    var lifeInDays = (maxAge - currAge)*365;

    var foodQuantityForLife = lifeInDays*foodQuantityPerDay;

    document.getElementById("output-data").innerHTML =
        foodQuantityForLife + "kg of " + foodName + " would enough be till I am " + maxAge + " years old."
}