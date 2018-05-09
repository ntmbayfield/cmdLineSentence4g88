function createWords(wordsArray) {
  var w=window.innerWidth;

    for (let i=0; i<wordsArray.length; i++) {

      //creates a draggable magnet element
      let word=document.createElement('div');
      word.className = "draggable";
      word.style.height = "30px";
      word.style.marginBottom = "5px";
      word.style.width = ((8 * wordsArray[i].length)+10) + "px";
      word.style.backgroundColor = "white";
      word.style.border = "solid 1px black";
      word.style.boxShadow = " 5px 5px 2px grey";
      word.setAttribute("draggable", "true");
      let magnetContainer = document.getElementById("magnet_container");
      magnetContainer.appendChild(word)
      
      //  .draggable().appendTo('#magnet_container');

      //puts a word on the magnet
      let para=document.createElement('p');
      para.innerHTML = wordsArray[i];
      para.style.textAlign = "center";
      para.style.paddingTop = "5px";
      para.style.marginTop = "3px";
      para.style.marginBottom = "3px";
      word.appendChild(para);
    }
}



var wordsArr1 = ["the", "I", "me", "code", "now", "white", "black", "exasperating", "try", "love", "command", "mindset", "growth", "iterate", "diversity", "mental", "models", "success"];

createWords(wordsArr1);

//   $(document).ready(function() {
//     var draggableElems = document.querySelectorAll('.draggable');
//     // array of Draggabillies
//     var draggies = []
//     // init Draggabillies
//     for ( var i=0, len = draggableElems.length; i < len; i++ ) {
//       var draggableElem = draggableElems[i];
//       var draggie = new Draggabilly( draggableElem, {
//         containment: true
//       });
//       draggies.push( draggie );
//     }
//   });
//
// }
