


function courseGradeScaling() {
    var input = [{'name': 'Пешо', 'score': 91},
        {'name': 'Лилия', 'score': 290},
        {'name': 'Алекс', 'score': 343},
        {'name': 'Габриела', 'score': 400},
        {'name': 'Жичка', 'score': 70}];

    for (var i = 0; i < input.length; i++) {
        var student = input[i];
        student["score"] = (student["score"] * 1.1).toFixed(1);
        student["score"] >= 100 ? student["hasPassed"] = true : student["hasPassed"] = false;
    }

    var passedStudents = input.filter(isExamPassed);
    var sortedPassedStudents = passedStudents.sort(compareNames);

    function compareNames(a,b){

            if (a.name < b.name)
                return -1;
            else if (a.name > b.name)
                return 1;
            else
                return 0;
    }


    function isExamPassed(element){
        return element["hasPassed"];
    }

    Object.prototype.toString = function toString() {
        var output = '{"name":"' + this["name"] + '","score":' + this["score"] + ',"hasPassed":' +
            this["hasPassed"] + "}";
        return output;
    };

    document.getElementById("output-data").innerHTML = "[ " + sortedPassedStudents.join(", ") + " ]";
}