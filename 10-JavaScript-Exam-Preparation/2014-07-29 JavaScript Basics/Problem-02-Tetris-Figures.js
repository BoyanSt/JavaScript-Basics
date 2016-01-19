function solve(args) {
    var outputResult = {"I": 0, "L": 0, "J": 0, "O": 0, "Z": 0, "S": 0, "T": 0};

    checkForI(args);
    checkForL(args);
    checkForJ(args);
    checkForO(args);
    checkForZ(args);
    checkForS(args);
    checkForT(args);
    console.log(JSON.stringify(outputResult));

    function checkForI(arr) {
        for (var i = 0; i <= arr.length - 4; i++) {
            for (var j = 0; j <= arr[i].length - 1; j++) {
                if (arr[i][j] === 'o' && arr[i + 1][j] === 'o' && arr[i + 2][j] === 'o' && arr[i + 3][j] === 'o') {
                    outputResult.I++;
                }
            }
        }
    }

    function checkForL(arr) {
        for (var i = 0; i <= arr.length - 3; i++) {
            for (var j = 0; j <= arr[i].length - 2; j++) {
                if (arr[i][j] === 'o' && arr[i + 1][j] === 'o' && arr[i + 2][j] === 'o' && arr[i + 2][j + 1] === 'o') {
                    outputResult.L++;
                }
            }
        }
    }

    function checkForJ(arr) {
        for (var i = 0; i <= arr.length - 3; i++) {
            for (var j = 0; j <= arr[i].length - 2; j++) {
                if (arr[i][j + 1] === 'o' && arr[i + 1][j + 1] === 'o' && arr[i + 2][j + 1] === 'o' && arr[i + 2][j] === 'o') {
                    outputResult.J++;
                }
            }
        }
    }

    function checkForO(arr) {
        for (var i = 0; i <= arr.length - 2; i++) {
            for (var j = 0; j <= arr[i].length - 2; j++) {
                if (arr[i][j] == 'o' && arr[i][j + 1] == 'o' && arr[i + 1][j] == 'o' && arr[i + 1][j + 1] == 'o') {
                    outputResult.O++;
                }
            }
        }
    }

    function checkForZ(arr) {
        for (var i = 0; i <= arr.length - 2; i++) {
            for (var j = 0; j <= arr[i].length - 3; j++) {
                if (arr[i][j] === 'o' && arr[i][j + 1] === 'o' && arr[i + 1][j + 1] === 'o' && arr[i + 1][j + 2] === 'o') {
                    outputResult.Z++;
                }
            }
        }
    }

    function checkForT(arr) {
        for (var i = 0; i <= arr.length - 2; i++) {
            for (var j = 0; j <= arr[i].length - 3; j++) {
                if (arr[i][j] === 'o' && arr[i][j + 1] === 'o' && arr[i][j + 2] === 'o' && arr[i + 1][j + 1] === 'o') {
                    outputResult.T++;
                }
            }
        }
    }

    function checkForS(arr) {
        for (var i = 0; i <= arr.length - 2; i++) {
            for (var j = 0; j <= arr[i].length - 3; j++) {
                if (arr[i + 1][j] === 'o' && arr[i + 1][j + 1] === 'o' && arr[i][j + 1] === 'o' && arr[i][j + 2] === 'o') {
                    outputResult.S++;
                }
            }
        }
    }
}