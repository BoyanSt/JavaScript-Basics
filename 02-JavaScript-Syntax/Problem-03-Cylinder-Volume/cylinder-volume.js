/**
 * Created by boyan on 1/8/2016.
 */

function global(){

    var radiusInput = Number(document.getElementById("radius").value),
        heightInput = Number(document.getElementById("height").value);

    function calcVolume(radius, height){
        var volume = Math.PI*radius*radius*height;
        return volume.toFixed(3);
    }

    document.getElementById("output-volume").innerHTML = calcVolume(radiusInput, heightInput);

}
