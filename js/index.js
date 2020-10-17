"use strict";
// function testPromise1(input){
//     return new Promise(ok => {
//         ok(`プロミス${input}です`);
//     })
// }
// console.log(testPromise1("太郎"));


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

function testPromise(pay,seconds){
    return new Promise((ok,ng) => {
        setTimeout(()=>{
            if (pay > 100){
                let change = pay - 100;
                console.log(`${seconds}秒、お釣りは${change}です。`);
                ok(change);
            }
            ng('お金がありません。恵んでください。');
        },1000 * seconds)

    });
}
console.log(1);
testPromise(300,2)
.then(change1=>testPromise(change1,3))
.then(change2=>testPromise(change2,2))
.catch(e=>console.log(e)); 
console.log(3);

// console.log(testPromise3(200));
// console.log(testPromise3(80).catch( e  =>{console.log(e)}));

