import Map from './images/the-map.jpg';

export default function contact() {
  const element = document.createElement('div');
  const content = document.createElement('div');
  const myMap = new Image();
  myMap.src = Map;

  content.className = 'content';
  content.appendChild(myMap);
  element.className = 'flex-container';

  const text = document.createElement('h2');
  text.innerHTML = 'Encuéntrala en su casa';

  content.appendChild(text);
  element.appendChild(content);

  return element;
}
