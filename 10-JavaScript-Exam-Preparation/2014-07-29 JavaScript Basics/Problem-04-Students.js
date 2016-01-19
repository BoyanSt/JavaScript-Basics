function Solve(args) {

    var results = {};
    args.forEach(function (line) {
        var inputSplit = line.split('|'),
            name = inputSplit[0].trim(),
            subject = inputSplit[1].trim(),
            note = Number(inputSplit[2].trim()),
            visits = Number(inputSplit[3].trim());

        if (!results[subject]) {
            results[subject] = {grades: [], visits: [], students: []};
        }
        results[subject].grades.push(note);
        results[subject].visits.push(visits);

        if (results[subject].students.indexOf(name) == -1) {
            results[subject].students.push(name);
        }
    });

    var sortedResult = {};
    var courses = Object.keys(results).sort();
    for (var c in courses) {
        var course = courses[c];
        var courseDescription = {
            avgGrade: calcAverageGrade(results[course].grades),
            avgVisits: calcAverageVisits(results[course].visits),
            students: results[course].students.sort()
        };
        sortedResult[course] = courseDescription;
    }

    console.log(JSON.stringify(sortedResult));

    function calcAverageGrade(arr) {
        var sum = 0;
        arr.forEach(function (element) {
            sum += element;
        });
        var avgGrade = sum / arr.length;
        return Number(avgGrade.toFixed(2));
    }

    function calcAverageVisits(arr) {
        var sum = 0;
        arr.forEach(function (element) {
            sum += element;
        });
        var avgVisits = sum / arr.length;
        return Number(avgVisits.toFixed(2));
    }
}
