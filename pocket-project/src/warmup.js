
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement, elType) => {
  let pTag = document.createElement(elType);
  pTag.innerHTML = string;
  let htmlChildren = Array.from(htmlElement.children);
  if (htmlChildren.length) {
    htmlChildren.forEach(child => {
      htmlElement.removeChild(child);
    });
  }
  htmlElement.appendChild(pTag);
};

htmlGenerator('Party Time.', partyHeader, "p");
htmlGenerator("I <3 Vanilla DOM manipulation.", partyHeader, "p");