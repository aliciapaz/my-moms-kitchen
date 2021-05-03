import Kitchen from './images/cocina.jpg'

export function component() {
  const element = document.createElement('div');
  const cover = document.createElement('div');
  const header = document.createElement('h1');
  element.className = 'home-image';
  cover.className = 'cover';
  header.innerHTML = "My Mom's Kitchen";
  
  const myKitchen = new Image();
  myKitchen.src= Kitchen;

  element.appendChild(myKitchen);
  element.appendChild(cover);
  element.appendChild(header);
  
  return element;
}
