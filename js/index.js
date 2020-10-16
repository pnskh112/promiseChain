"use strict";
function testPromise1(input){
    return new Promise(ok => {
        ok(`プロミス${input}です`);
    })
}
console.log(testPromise1("太郎"));


// function testPromise2(pay){
//     return new Promise(ok => {
//         let change = pay - 100;
//         ok(change);
//     })
// }

// console.log(testPromise2(200));

// testPromise2(400).then(change1 =>{
//     console.log(change1);
//     return testPromise2(change1); //Promiseでラップされた状態
// }).then(change2 =>{
//     console.log(change2);
// }).catch(e => {
//     console.log(e);
// });

function testPromise3(pay){
    return new Promise((ok,ng) => {
        if (pay > 100){
            let change = pay - 100;
            ok(change);
        }
        ng('お金がありません。恵んでください。');
    });
}
// console.log(testPromise3(200));
// console.log(testPromise3(80).catch( e  =>{console.log(e)}));
console.log(testPromise3(280).then(change1 => {
    console.log(change1);
    return testPromise3(change1);
}).then(change2 => {
    console.log(change2);
}).catch(testPromise3( e => {console.log(e)})));
