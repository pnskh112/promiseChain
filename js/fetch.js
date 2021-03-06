"use strict";

const url = "https://dog.ceo/api/breeds/image/random";
const options = {
    method: 'GET'
};
const fetchTest = fetch(url,options);
console.log(fetchTest);

//APIがJSONで取得できるなら response.json()でパースする
const fetchTest2 = fetch(url,options)
.then( response => response.json() );

//データの取得をまってから処理をする
//Promise、async/await
function fetchDogImage(url,options){
    return fetch(url,options)
    .then(response => {
        console.log(response.ok);
        console.log(response.status);
        if(response.ok){
            return response.json();
        }
        throw new Error('エラーです');
    }).catch(e => console.log(e.message));
}

async function fetchImage(url,options){
    const response = await fetchDogImage(url,options);
    console.log(response.message);

    const imageDiv = document.getElementById('image');
    const imageElement = document.createElement('img');
    imageElement.src = response.message;
    imageDiv.appendChild(imageElement); 
}

fetchImage(url,options);
