window.onload = function makeDraggableWords() {

  function createWords(wordsArray) {
    for (let i=0; i<wordsArray.length; i++) {
      let word=document.createElement('div');
      word.className = "words";
      word.innerHTML = wordsArray[i];
      word.style.width = (5 * wordsArray[i].length) + "px";
      word.style.backgroundColor = "white";
      word.style.border = "solid 1px black";
      word.style.boxShadow = " 5px 5px 2px grey";
      document.body.appendChild(word);
    }
  }

  var wordsArr1 = ["the", "I", "me", "code", "now", "white", "black", "exasperating", "try", "love", "command", "mindset", "growth", "iterate", "diversity", "mental", "models", "success"];

  createWords(wordsArr1);


}
