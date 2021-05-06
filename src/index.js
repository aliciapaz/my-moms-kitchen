import 'reseter.css';
import './style.css';
import '@fortawesome/fontawesome-free/js/all';
import '@fortawesome/fontawesome-free/css/all.css';
import { background, board, home } from './home';
import navTab from './tabs';
import menu from './menu';
import about from './about';
import contact from './contact';

document.body.appendChild(navTab());
document.body.appendChild(background());
document.body.appendChild(board());
document.body.appendChild(home());

(() => {
  const tabs = document.getElementsByTagName('li');

  function clearMenu(menu) {
    menu.className = 'nav-links';
  }

  function clearBoard() {
    const content = document.querySelector('.flex-container');
    if (content !== undefined) { content.remove(); }
  }

  function displayContent(tab) {
    if (tab.innerHTML === 'Home') { document.body.appendChild(home()); }
    if (tab.innerHTML === 'About') { document.body.appendChild(about()); }
    if (tab.innerHTML === 'Contact') { document.body.appendChild(contact()); }
    if (tab.innerHTML === 'Menu') { document.body.appendChild(menu()); }
  }

  for (let i = 0; i < tabs.length; i += 1) {
    const tab = tabs[i];
    tabs[i].onclick = () => {
      if (tab.parentNode.className === 'responsive') { clearMenu(tab.parentElement); }
      clearBoard();
      displayContent(tab);
    };
  }
})();