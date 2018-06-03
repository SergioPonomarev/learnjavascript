console.log('external I\'am JavaScript');

function foo(lines) {
    var star = '*';
    var t = 0;
    while(t < lines) {
        var space = ' ';
        for (var i = 0; i < lines - t; i++) {
            space += ' ';
        }
        console.log(space + star);
        star += '**';
        t++;
    }
}
 

foo(5);