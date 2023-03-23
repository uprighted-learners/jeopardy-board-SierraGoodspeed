// Do not change the import statement
// This statement imports the exported file so it's contents are accessible to us.
// This make the "placeholderQuestions" act like a variable essentially
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0]);
// When I need a question/answer I can iterate over the array

const turn = document.getElementById('player-turn')
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const category = document.getElementsByClassName('category')
const catTItle = document.getElementsByClassName('category-title')
const question = document.getElementsByClassName('question')
const guess = document.getElementById('guess')
const input = document.getElementById('pass')



