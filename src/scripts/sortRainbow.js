const container = document.querySelector("#rainbow");
const sortButton = document.querySelector("#sortButton");
const resetButton = document.querySelector("#resetButton");

const numberOfColumns = 359;
const duration = 7.5;
const saturation = 70;
const lightness = 70;

let onlyHue = [];

function appendColumns(rainbow) {
  container.innerHTML = ""; // Reset the container
  for (let i = 0; i < rainbow.length; i++) {
    const col = document.createElement("div");
    col.style.background = `hsl(${rainbow[i].hue},${saturation}%, ${lightness}%)`;
    col.style.width = "100px";
    col.style.height = "100%";
    container.append(col);
  }
}

function createColumns() {
  for (let i = 0; i < numberOfColumns; i++) {
    let hue = Math.floor(Math.random() * numberOfColumns);
    //    onlyHue = [
    //      ...onlyHue,
    //      {
    //        hue,
    //      },
    //    ];

    onlyHue[i] = { hue };
  }

  appendColumns(onlyHue);
}

createColumns();

function sortRainbow() {
  const columns = container.children;

  for (let i = 0; i < onlyHue.length; i++) {
    for (let j = 0; j < onlyHue.length - i - 1; j++) {
      if (onlyHue[j].hue > onlyHue[j + 1].hue) {
        let temp = onlyHue[j];
        onlyHue[j] = onlyHue[j + 1];
        onlyHue[j + 1] = temp;

        setTimeout(() => {
          container.insertBefore(columns[j + 1], columns[j]);
        }, 1);
      }
    }
  }
}

sortButton.addEventListener("click", sortRainbow);
resetButton.addEventListener("click", createColumns);
