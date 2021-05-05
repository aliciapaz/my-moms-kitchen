export function navTab() {
  const element = document.createElement("nav");
  
  const toggleBtn = document.createElement("div"); 
  const tabs = document.createElement("ul");
  tabs.className = "nav-links";
  const menuTab = document.createElement("li");
  const aboutTab = document.createElement("li");
  const contactTab = document.createElement("li");
  const homeTab = document.createElement("li");
  
  const burgerIcon = document.createElement("i");
  burgerIcon.className = "fas fa-bars burger-btn";
  toggleBtn.appendChild(burgerIcon);
  
  toggleBtn.onclick = () => {
    if (tabs.className === "nav-links") {
      tabs.className = "responsive";
    } else {
      tabs.className = "nav-links"
    }
  };

  homeTab.innerHTML = "Home";
  menuTab.innerHTML = "Menu";
  aboutTab.innerHTML = "About";
  contactTab.innerHTML = "Contact";

  tabs.appendChild(homeTab);
  tabs.appendChild(menuTab);
  tabs.appendChild(aboutTab);
  tabs.appendChild(contactTab);

  element.appendChild(toggleBtn);
  element.appendChild(tabs);

  return element;
}
