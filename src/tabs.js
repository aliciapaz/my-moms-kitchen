export function navTab() {
  const element = document.createElement("nav");
  const tabs = document.createElement("ul");
  const toggleBtn = document.createElement("div");
  const burgerIcon = document.createElement("i");
  burgerIcon.className = "fas fa-bars burger-btn";
  tabs.className = "nav-links";

  const menuTab = document.createElement("li");
  const aboutTab = document.createElement("li");
  const contactTab = document.createElement("li");
  const homeTab = document.createElement("li");

  homeTab.innerHTML = "Home";
  menuTab.innerHTML = "Menu";
  aboutTab.innerHTML = "About";
  contactTab.innerHTML = "Contact";

  toggleBtn.appendChild(burgerIcon);
  toggleBtn.onclick = () => {
    homeTab.style.display = 'block';
    menuTab.style.display = 'block';
    aboutTab.style.display = 'block';
    contactTab.style.display = 'block';
  };

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(aboutTab);
  tabs.appendChild(contactTab);
  tabs.appendChild(toggleBtn);

  element.appendChild(tabs);
  return element;
}
