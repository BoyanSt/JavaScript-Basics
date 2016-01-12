/**
 * Created by boyan on 1/9/2016.
 */


//the function does not calculate expressions with brackets !!!

function calcExpression() {
    var inputLine = document.getElementById("input-expression").value;

    // check for division, calculate division and replace in the expression

    if (checkForDivision(inputLine)) {
        inputLine = calculateDivision(inputLine);
    }

    // check for multiplication, calculate multiplication and replace in the expression

    if (checkForMultiplication(inputLine)) {
        inputLine = calculateMultiplication(inputLine);
    }

    // check for subtraction, calculate subtraction and replace in the expression

    if (checkForSubtraction(inputLine)) {
        inputLine = calculateSubtraction(inputLine);
    }

    // check for addition, calculate addition and replace in the expression

    if (checkForAddition(inputLine)) {
        inputLine = calculateAddition(inputLine);
    }
    if (checkForAddition(inputLine)) {
        inputLine = calculateAddition(inputLine);
    }

    document.getElementById("output-data").innerHTML = inputLine;

}


function checkForMultiplication(expression){
    var pattern = /-*[0-9.]+\*-*[0-9.]+/i;
    return pattern.test(expression);
}

function checkForDivision(expression){
    var pattern = /-*[-0-9.]+\/-*[0-9.]+/i;
    return pattern.test(expression);
}

function checkForSubtraction(expression){
    var pattern = /-*[0-9.]+--*[0-9.]+/i;
    return pattern.test(expression);
}

function checkForAddition(expression){
    var pattern = /-*[0-9.]+\+-*[0-9.]+/i;
    return pattern.test(expression);
}

function calculateMultiplication(expression){
    var pattern = /-*[0-9.]+\*-*[0-9.]+/g;
    var match = expression.match(pattern);

    for (var i = 0; i < match.length; i++) {
        var currMatch = match[i];
        var leftNum = Number(takeLeftNumber(currMatch));
        var rightNum = Number(takeRightNumber(currMatch));
        var resultOperation =  leftNum*rightNum;
        expression = expression.toString().replace(currMatch.toString(),resultOperation.toString());
    }
    return expression;
}

function calculateDivision(expression){
    var pattern = /-*[0-9.]+\/-*[0-9.]+/g;
    var match = expression.match(pattern);

    for (var i = 0; i < match.length; i++) {
        var currMatch = match[i];
        var leftNum = Number(takeLeftNumber(currMatch));
        var rightNum = Number(takeRightNumber(currMatch));
        var resultOperation =  leftNum/rightNum;
        expression = expression.toString().replace(currMatch.toString(),resultOperation.toString());
    }
    return expression;
}

function calculateSubtraction(expression){
    var pattern = /-*[0-9.]+--*[0-9.]+/g;
    var match = expression.match(pattern);

    for (var i = 0; i < match.length; i++) {
        var currMatch = match[i];
        var leftNum = Number(takeLeftNumber(currMatch));
        var rightNum = Number(takeRightNumber(currMatch));
        var resultOperation =  leftNum-rightNum;
        expression = expression.toString().replace(currMatch.toString(),resultOperation.toString());
    }
    return expression;
}

function calculateAddition(expression){
    var pattern = /-*[0-9.]+\+-*[0-9.]+/g;
    var match = expression.match(pattern);

    for (var i = 0; i < match.length; i++) {
        var currMatch = match[i];
        var leftNum = Number(takeLeftNumber(currMatch));
        var rightNum = Number(takeRightNumber(currMatch));
        var resultOperation =  leftNum+rightNum;
        expression = expression.toString().replace(currMatch.toString(),resultOperation.toString());
    }
    return expression;
}
function takeLeftNumber(expression){
    var pattern = /^-*[0-9.]+/g;
    return expression.match(pattern)[0];
}

function takeRightNumber(expression){
    var pattern = /[0-9][*+\/-](-*[0-9.]+)/g;
    var match = pattern.exec(expression);
    return  match[1];
}