var wordsArr1 = ["the", "I", "me", "code", "now", "white", "black", "exasperating", "try", "love", "command", "mindset", "growth", "iterate", "diversity", "mental", "models", "success", "embrace"];

function createWords(wordsArray) {
  for (let i=0; i<wordsArr1.length; i++) {
    let word=document.createElement('div');
    document.word.innerHTML = wordsArray[i];
    word.style.width = (5 * wordsArray[i].length) + "px";
    word.style.backgroundColor = "white";
    word.style.border = "solid 1px black";
    word.style.boxShadow = " 5px 5px 2px grey";
    document.body.appendChild(word);
  }
}
