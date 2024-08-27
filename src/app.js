/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const p = document.getElementById("excuse");
  p.innerText = excuses();
};

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];
function excuses() {
  let who_position = Math.floor(Math.random() * who.length);
  let action_position = Math.floor(Math.random() * action.length);
  let what_position = Math.floor(Math.random() * what.length);
  let when_position = Math.floor(Math.random() * when.length);
  let excuse = `${who[who_position]} ${action[action_position]} ${what[what_position]} ${when[when_position]}`;
  return excuse;
}
