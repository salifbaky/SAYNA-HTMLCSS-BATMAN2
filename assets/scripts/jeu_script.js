import { quizContent } from './questionnaires.js';

let indexQuestion = 0;
let quizContainer = document.getElementById('game-content');
let btnQtnSuivant;

let indiceJeu=0 ;

function debuterJeu(){
quizContainer.innerHTML = quizContent[indiceJeu];
indiceJeu+=1
}

const boutonDebuter = document.getElementById('debuter_jeu');

boutonDebuter.addEventListener('click', () => {

switch (indiceJeu){

case 0:
    debuterJeu();
    boutonDebuter.textContent='QUESTION SUIVANTE';
break;

case quizContent.length-2:
    quizContainer.innerHTML = quizContent[indiceJeu];
    boutonDebuter.textContent='VOIR RESULTAT';
    indiceJeu+=1
break;

case quizContent.length-1:
    quizContainer.innerHTML = quizContent[indiceJeu];
    boutonDebuter.textContent='REPRENDRE';
    indiceJeu=0;
    break;

    default:
    debuterJeu();
}

});






/*
document.addEventListener('DOMContentLoaded', function() {

  });
  */

/*

    console.log(indiceJeu);
        btnQtnSuivant.addEventListener('click', () => {
        alert("OK SUIS CHARGE");
        quizContainer.innerHTML = quizContent[indiceJeu+1];
        indiceJeu+=1;
    });

*/