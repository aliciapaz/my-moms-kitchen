import Palta from './images/palta.jpg'
import Huma from './images/huma.jpg'
import Char from './images/char.jpg'
import Leche from './images/leche-asada.jpg'

export function menu() {
  const element = document.createElement("div");
  const menuList = document.createElement('ul');
  menuList.className = "content menuList"
  element.className = 'flex-container';
  const first = document.createElement('li')
  const second = document.createElement('li')
  const third = document.createElement('li')
  const fourth = document.createElement('li')

  first.innerHTML = 'Palta reina'
  second.innerHTML = 'Charquicán'
  third.innerHTML = 'Humitas'
  fourth.innerHTML = 'Leche asada'

  const myPalta = new Image();
  myPalta.src = Palta;
  first.appendChild(myPalta);

  const myChar = new Image();
  myChar.src = Char;
  second.appendChild(myChar);

  const myHuma = new Image();
  myHuma.src = Huma;
  third.appendChild(myHuma);

  const lecheAsada = new Image();
  lecheAsada.src = Leche;
  fourth.appendChild(lecheAsada);

  menuList.appendChild(first);
  menuList.appendChild(second);
  menuList.appendChild(third);
  menuList.appendChild(fourth);
  element.appendChild(menuList);

  return element;
}