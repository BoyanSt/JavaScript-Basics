function Solve(args) {
    var arr = args.map(Number);

    console.log('<table>\n<tr><th>Price</th><th>Trend</th></tr>');
    console.log('<tr><td>' + arr[0].toFixed(2) + '</td><td><img src="fixed.png"/></td></td>');


    for (var i = 1; i < args.length; i++) {
        var previousPrice = arr[i - 1];
        var currPrice = args[i];
        var trend = '';
        if (currPrice === previousPrice) {
            trend = 'fixed.png';
        } else if (currPrice < previousPrice) {
            trend = 'down.png';
        } else if (currPrice > previousPrice) {
            trend = 'up.png';
        }
        console.log('<tr><td>' + currPrice.toFixed(2) + '</td><td><img src=' + trend + '/></td></td>');
    }
    console.log('</table>')
}
