export function navTab() {
  const element = document.createElement("nav");
  const tabs = document.createElement("ul");
  const burgerBtn = document.createElement('i');
  burgerBtn.className = 'fas fa-bars burger-btn';
  burgerBtn.onclick = displayLinks();
  tabs.className = 'nav-links'

  const menuTab = document.createElement("li");
  const aboutTab = document.createElement("li");
  const contactTab = document.createElement("li");
  const homeTab = document.createElement("li");

  homeTab.innerHTML = 'Home';
  menuTab.innerHTML = 'Menu';
  aboutTab.innerHTML = 'About';
  contactTab.innerHTML = 'Contact';

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(aboutTab);
  tabs.appendChild(contactTab);
  tabs.appendChild(burgerBtn);
  
  element.appendChild(tabs);

  function displayLinks() {

  }

  return element;
}
