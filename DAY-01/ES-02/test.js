
"use strict";

var x = 5;



function test() {
    var a = 10;
    if (true) {
        var b = 15;
        console.log(b);
    }
    console.log(a);
    b = 16;
    console.log(b);
}


function test2() {
    let a = 10;
    if (true) {
        let b = 15;
        console.log(b);
    }
    console.log(a);
    b = 16;
    console.log(b);
}


test();
test2();