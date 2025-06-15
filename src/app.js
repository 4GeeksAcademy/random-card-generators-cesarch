import "bootstrap";
import "./style.css";

window.onload = function() {
  generacionCarta() 
  //auto refreshes the page after 30 seconds
  setTimeout(() => {
    location.reload();
  }, 30000);
};

const generacionCarta = () => {
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
  }else{ 
  pintaValorUp.style.color = "black";
  pintaValorDown.style.color = "black";
  }
  document.querySelector("#generadorCarta").addEventListener("click", generacionCarta);
}


