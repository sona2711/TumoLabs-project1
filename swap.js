'use strict';

document.querySelector('#clickme').addEventListener('click', function() {
    const myText = document.querySelector('input').value;
    const myChar = myText.split("").length;
    const myWord = myText.split(" ").filter(s => s.length > 0).length;
    const mySentence = myText.match( /[^\.!\?]+[\.!\?]+/g ).length;
    console.log(myChar, myWord, mySentence );

    document.getElementById('character').innerHTML = myChar;
    document.getElementById('word').innerHTML = myWord;
    document.getElementById('sentence').innerHTML = mySentence;
});
document.querySelector("#randomcolor").addEventListener('click', function() {
    document.body.style.backgroundColor = 
    'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

})

document.querySelector('#reset').addEventListener('click', function() {
   document.querySelector('input').value = '';
   document.getElementById('character').innerHTML = 0;
   document.getElementById('word').innerHTML = 0;
   document.getElementById('sentence').innerHTML = 0;
})