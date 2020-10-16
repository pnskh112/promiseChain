"use strict";
function testPromise1(input){
    return new Promise(ok => {
        ok(`プロミス${input}です`);
    })
}
console.log(testPromise1("太郎"));