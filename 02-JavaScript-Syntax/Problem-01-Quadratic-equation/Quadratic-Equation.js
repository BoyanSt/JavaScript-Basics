/**
 * Created by boyan on 1/8/2016.
 */


function calcRoots() {
    var numA = Number(document.getElementById("a-value").value),
        numB = Number(document.getElementById("b-value").value),
        numC = Number(document.getElementById("c-value").value),
        root1 = 0,
        root2 = 0;

    var discriminant = numB*numB - 4*numA*numC;
    if (discriminant<0) {
        document.getElementById("output-roots").innerHTML = 'no real roots';
    }
    else if ( discriminant === 0) {
        root1 = (-numB)/(2*numA);
        document.getElementById("output-roots").innerHTML = root1.toString();
    }
    else{
        root1 = ((-numB) + Math.sqrt(discriminant))/(2*numA);
        root2 = ((-numB) - Math.sqrt(discriminant))/(2*numA);
        document.getElementById("output-roots").innerHTML =
            root1.toString() + " " + root2.toString();
    }
}
