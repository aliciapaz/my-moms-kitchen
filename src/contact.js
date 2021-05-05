export function contact() {
  const element = document.createElement("div");
  const content = document.createElement("div");
  content.className = "content";
  element.className = "flex-container";

  const text = document.createElement("h2");
  text.innerHTML =
    "Encuéntrala en su casa";

  content.appendChild(text);
  element.appendChild(content);

  return element;
}
