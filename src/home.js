import Kitchen from './images/cocina.jpg'

export function component() {
  const element = document.createElement('div');
  element.className = 'home-image';
  const myKitchen = new Image();
  myKitchen.src= Kitchen;

  element.appendChild(myKitchen);
  return element;
}
