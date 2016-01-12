/**
 * Created by boyan on 1/8/2016.
 */


function calcKnots(){
    var numInput = Number(document.getElementById("input-value").value);

    var numOutput = numInput/1.852;

    document.getElementById("output-knots").innerHTML = numOutput.toFixed(2);
}