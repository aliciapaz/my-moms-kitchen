import Kitchen from "./images/cocina.jpg";
import Board from "./images/chalkboard.jpg";

export function background() {
  const element = document.createElement("div");
  const cover = document.createElement("div");

  element.className = "home-image";
  cover.className = "cover";

  const myKitchen = new Image();
  myKitchen.src = Kitchen;

  element.appendChild(myKitchen);
  element.appendChild(cover);
  const ribbonCont = document.createElement('div')
  const ribbon = document.createElement('h1');
  const header = document.createElement("strong");
  ribbonCont.className = 'ribbon-container'
  ribbon.className = 'ribbon'
  header.className = 'ribbon-content'
  header.innerHTML = "La cocina de Fabiola";
  ribbon.appendChild(header);
  ribbonCont.appendChild(ribbon)
  element.appendChild(ribbonCont)
  return element;
}

export function board() {
  const container = document.createElement("div");
  const myBoard = new Image();
  myBoard.src = Board;
  container.className = "board-container";
  container.appendChild(myBoard);
  
  return container;
}

export function home() {
  const element = document.createElement("div");
  const content = document.createElement("div");
  content.className = "content"
  element.className = "flex-container";

  const text = document.createElement("h2");
  text.innerHTML = "Mis platos favoritos hechos por mi mamá";
  
  content.appendChild(text);
  element.appendChild(content);

  return element;
}
