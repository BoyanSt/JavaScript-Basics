

function scoreManipulate(){
    var input = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];

    var filteredArray = input.filter(takeValidNumbers);

    var scaledArray = filteredArray.map(scaleElements);

    var sortedArray = scaledArray.sort(function(a,b){
        return a-b;
    });

    document.getElementById("output-data").innerHTML = sortedArray.join(", ");

    function takeValidNumbers(element){
        return element <= 400 && element >= 0;
    }

    function scaleElements(element){
        return (element * 0.8).toFixed(2);
    }
}