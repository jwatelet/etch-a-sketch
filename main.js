const container = document.querySelector(".screen");
const squareValue = 16;

drawSquare(container, squareValue);

document.getElementById("reset").addEventListener("click", (e) => resetSquareColoration());
document.getElementById("squareSize").addEventListener("input", (e) => {
  container.replaceChildren();
  drawSquare(container, e.target.value);
  document.getElementById("rangeValue").textContent = `${e.target.value}x${e.target.value}`;
});
document.getElementById("rangeValue").textContent = `${squareValue}x${squareValue}`;

function resetSquareColoration() {
  document.querySelectorAll(".square").forEach((element) => {
    element.classList.remove("colored");
    element.style.backgroundColor = "#D3D3D3";
  });
}

function drawSquare(container, squareValue) {
  for (let i = 0; i < squareValue; i++) {
    const row = document.createElement("div");
    row.classList.add("square");
    row.classList.add("row");
    for (let j = 0; j < squareValue; j++) {
      const column = document.createElement("div");
      column.classList.add("square");
      column.classList.add("column");
      row.appendChild(column);
    }
    container.appendChild(row);
  }
  document.querySelectorAll(".square").forEach((element) => {
    element.addEventListener("mouseover", (_) => {
      element.classList.add("colored")
      element.style.backgroundColor = "#000000"
      if (isColor()) {
        element.style.backgroundColor = getRandomColorHex();
      }
    });
  });
}

function isColor() {
  const radioButtonValue = document.querySelector('input[name="colorSelector"]:checked').value;

  return radioButtonValue === 'color';
}

function getRandomColorHex() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
}
