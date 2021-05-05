import 'reseter.css'
import './style.css';

import "@fortawesome/fontawesome-free/js/all.js";
import "@fortawesome/fontawesome-free/css/all.css";

import { background, board, home } from './home.js';
import { navTab } from './tabs.js';
import { about } from './about.js';
import { contact } from './contact.js';


document.body.appendChild(navTab());
document.body.appendChild(background());
document.body.appendChild(board());
document.body.appendChild(home());

(() => {
  let tabs = document.getElementsByTagName('li');
  
  for (let i = tabs.length; i--;) {
    let tab = tabs[i]
    tabs[i].onclick = () => {
      if (tab.parentNode.className === 'responsive') { clearMenu(tab.parentElement) }
      clearBoard();
      displayContent(tab); 
    }
  }

  function clearMenu(menu) {
    menu.className = 'nav-links'
  }

  function clearBoard() {
    let content = document.querySelector('.flex-container');
    if (content != undefined ) {content.remove()};
  }

  function displayContent(tab) {
    if (tab.innerHTML === 'Home') {document.body.appendChild(home())};
    if (tab.innerHTML === 'About') {document.body.appendChild(about())};
    if (tab.innerHTML === 'Contact') {document.body.appendChild(contact())};
  }
  
})()