var input = ['Pesho C#-Advanced 100 3',
    'Gosho Java-Basics 157 3',
    'Tosho HTML&CSS 317 12',
    'Minka C#-Advanced 57 15',
    'Stanka C#-Advanced 157 15',
    'Kircho C#-Advanced 300 0',
    'Niki C#-Advanced 400 10',
    'Java-Basics'];

Solve(input);

function Solve(args) {
    var courseToFindAverage = args[args.length - 1].trim().replace(/\s+/g,' '),
        avgGrade = 0,
        counter = 0;

    for (var i = 0; i < args.length - 1; i++) {
        var line = args[i].trim().replace(/\s+/g,' '),
            input = line.trim().split(' '),
            student = input[0].trim(),
            course = input[1].trim(),
            examPoints = Number(input[2]),
            courseBonus = Number(input[3]),
            coursePoints = 0,
            courseGrade = 0;

        if (courseToFindAverage == course) {
            counter++;
            avgGrade += examPoints;
        }

        if (examPoints >= 100) {
            coursePoints = examPoints * 0.2 + courseBonus;

            courseGrade = ((coursePoints / 80.0) * 4) + 2;

            if (courseGrade > 6) {
                courseGrade = 6
            }

            console.log( student +': Exam - "' + course + '"; Points - ' +
                Number(coursePoints.toFixed(2)) + '; Grade - ' +  courseGrade.toFixed(2));
        } else {
            console.log( student + ' failed at "' + course + '"');
        }
    }

    avgGrade = avgGrade/counter;
    console.log('"' + courseToFindAverage + '" average points -> ' + Number(avgGrade.toFixed(2)));
}













