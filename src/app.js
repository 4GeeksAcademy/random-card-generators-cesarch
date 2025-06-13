import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let pintas = ["♦", "♥", "♠", "♣"];
  let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomPintas = pintas[Math.floor(Math.random() * pintas.length)]; 
  let randomValores = valores[Math.floor(Math.random() * valores.length)];
  let combinacion = `${randomValores} ${randomPintas}`; 

 
const cuerpoCarta = document.querySelector("#carta");
const contenidoCarta = document.createElement("h1"); 

 contenidoCarta.innerText = combinacion; 
 cuerpoCarta.append(contenidoCarta);
};
