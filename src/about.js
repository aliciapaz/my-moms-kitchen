export function about() {
  const element = document.createElement("div");
  const content = document.createElement("div");
  content.className = "content";
  element.className = "flex-container";

  const text = document.createElement("h2");
  text.innerHTML =
    "Mi mamá prepara sus platos con verduras de la feria de Lampa, crecidas en chacras cercanas, y sazona con hierbas producidas en su patio. Sus preparaciones son una deliciosa mezcla de la gastronomía tradicional del valle central $hileno con toques modernos y mucho amor.";

  content.appendChild(text);
  element.appendChild(content);

  return element;
}

