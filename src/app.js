/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const numbers = ["AS", 2, 3, 4, 5, 6, 7, 8, "J", "Q", "K"];
  const sticksPoker = ["♦️", "♥️", "♠️", "♣️"];

  const createRandom = arr => {
    const numRandom = Math.floor(Math.random() * arr.length);
    const result = arr[numRandom];
    return result;
  };
  // console.log(createRandom(numbers));
  // console.log(createRandom(sticksPoker));

  const numberRandom = document.querySelector("#number");
  const pokerRandom = document.querySelector("#poker");
  const pokerRandom2 = document.querySelector("#poker2");
  numberRandom.innerHTML = createRandom(numbers);

  let num = createRandom(sticksPoker);
  pokerRandom.innerHTML = num;
  pokerRandom2.innerHTML = num;
  console.log("Hello Rigo from the console!");
};
