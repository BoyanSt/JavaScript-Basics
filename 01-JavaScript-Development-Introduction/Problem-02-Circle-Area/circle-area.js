/**
 * Created by boyan on 1/6/2016.
 */



function calcCircleArea(r){
    'use strict';
   return Math.PI*(r*r);
}

document.getElementById('first-area').innerHTML += calcCircleArea(7);
document.getElementById('second-area').innerHTML += calcCircleArea(1.5);
document.getElementById('third-area').innerHTML += calcCircleArea(20);
