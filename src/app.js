import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  const generadorRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  let pintas = ["♦", "♥", "♠", "♣"];
  let valores = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let cartaValor = generadorRandom(valores);
  let pintaValor = generadorRandom(pintas);
 
  const valorCarta = document.querySelector(".valor-carta"); 
  const pintaValorUp = document.querySelector("#pintaCartaUp");
  const pintaValorDown = document.querySelector("#pintaCartaDown");
  const cuerpoCarta = document.querySelector("#carta");

  pintaValorUp.innerText = pintaValor; 
  pintaValorDown.innerText = pintaValor;
  valorCarta.innerText = cartaValor; 

  if(pintaValor === "♦" || pintaValor === "♥"){
  pintaValorUp.style.color = "red";
  pintaValorDown.style.color = "red";
  }
};
