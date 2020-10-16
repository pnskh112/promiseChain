"use strict";
function testPromise1(input){
    return new Promise(ok => {
        ok(`プロミス${input}です`);
    })
}
console.log(testPromise1("太郎"));


function testPromise2(pay){
    return new Promise((ok) => {
        let change = pay - 100;
        ok(change);
    })
}

console.log(testPromise2(200));

testPromise2(400).then((change)=>{
    console.log(change);
    return testPromise2(change); //Promiseでラップされた状態
}).then((change )=>{
    console.log(change);
});