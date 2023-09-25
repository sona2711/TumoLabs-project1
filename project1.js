document.querySelector('#clickme').addEventListener('click', function() {
    const myText = document.querySelector('textarea').value;
    const myChar = myText.length;
    const myWord = myText.split(" ").filter(s => s.length > 0).length;
    const mySentence = myText.split(/[.?!]\s/).length;
    console.log(myChar, myWord, mySentence );

    document.getElementById('character').value = myChar;
    document.getElementById('word').value = myWord;
    document.getElementById('sentence').value = mySentence;
});
document.querySelector("#randomcolor").addEventListener('click', function() {
    document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';

})

document.querySelector('#reset').addEventListener('click', function() {
   document.querySelector('textarea').value = '';
   document.getElementById('character').value = 0;
   document.getElementById('word').value = 0;
   document.getElementById('sentence').value = 0;
})