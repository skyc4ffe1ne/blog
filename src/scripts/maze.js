const mazeContainer = document.querySelector("#maze");
const solveMazeBtn = document.querySelector("#solveMazeButton");
const resetBtn = document.querySelector("#resetMazeButton");

const pos = { x: 0, y: 0 };

// Example with pos
let pos_1 = { x: 0, y: 0 }; // Upper left
let pos_2 = { x: 4, y: 4 }; // Down left
let pos_3 = { x: 4, y: 0 }; // Upper right
let pos_4 = { x: 0, y: 4 }; // Down right

const WALL = false;
const FREE = true;
// =====================M1:
// FREE WALL WALL WALL WALL
// FREE FREE WALL WALL WALL
// WALL FREE WALL WALL WALL
// WALL FREE FREE WALL WALL
// WALL WALL FREE FREE FREE
const M1 = [
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  FREE,
  FREE,
];

const M2 = [
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
];

const M3 = [
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  FREE,
  FREE,
  FREE,
];

const M4 = [
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
];

const M5 = [
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  FREE,
  FREE,
];

const M6 = [
  FREE,
  FREE,
  FREE,
  FREE,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
  WALL,
  WALL,
  WALL,
  WALL,
  FREE,
];

// -> Maze
// produces a random maze based on the avaible ones
let currentMaze;
function randomMaze() {
  mazeContainer.innerHTML = "";
  let mazes = [M1, M3, M4, M5, M6];
  let randomMaze = Math.floor(Math.random() * mazes.length);
  currentMaze = mazes[randomMaze];
  currentMaze.map((m) => {
    let newDiv = document.createElement("div");
    !m ? newDiv.classList.add("wall") : newDiv.classList.add("free");
    mazeContainer.appendChild(newDiv);
  });
}

// Maze -> Boolean
// produce true if the given maze is solvable, false otherwise

function solvable(m, p, visited) {
  if (visited.has(p)) return false;
  visited.add(p);
  const solutionPath = document.createElement("div");
  let getIndex = p.x + p.y * Math.sqrt(m.length);

  //  const posY = p.y > 0 ? p.y * 25 : 5;
  //  const posX = p.x > 0 ? p.x * 20 : 5.5;

  solutionPath.style.position = "absolute";
  solutionPath.style.top = "50%";
  solutionPath.style.left = "50%";
  solutionPath.style.transform = "translate(-50%,-50%)";
  solutionPath.style.width = "24px";
  solutionPath.style.height = "24px";
  solutionPath.style.background = "red";
  solutionPath.style.borderRadius = "100px";
  solutionPath.style.zIndex = "100";
  solutionPath.classList.add("solution");
  mazeContainer.children[getIndex].appendChild(solutionPath);

  let lop = nextLop(m, p);
  if (lop.length === 0) {
    return false;
  }
  for (let i = 0; i < lop.length; i++) {
    if (lop[i].x === 4 && lop[i].y === 4) {
      const endSolutionPath = document.createElement("div");
      endSolutionPath.style.position = "absolute";
      endSolutionPath.style.top = "50%";
      endSolutionPath.style.left = "50%";
      endSolutionPath.style.transform = "translate(-50%,-50%)";
      endSolutionPath.style.width = "24px";
      endSolutionPath.style.height = "24px";
      endSolutionPath.style.background = "red";
      endSolutionPath.style.borderRadius = "100px";
      endSolutionPath.style.zIndex = "100";
      endSolutionPath.classList.add("solution");
      let endIndex = lop[i].x + lop[i].y * Math.sqrt(m.length);
      mazeContainer.children[endIndex].appendChild(endSolutionPath);
      return true;
    } else if (solvable(m, lop[i], visited)) {
      return true;
    }
  }

  return false;
}

// Maze Pos -> ListOfPos
// produce a new ListOfPos with good pos (pos that aren't on wall)
const expected_nextLop = [
  {
    x: 0,
    y: 1,
  },
];

function nextLop(m, p) {
  return checkPos(updatePos(p), m);
}

// Pos -> ListOfPos
// produce a new list of pos with updated pos

const expected_updatePos = [
  { x: 1, y: 0 },
  { x: 0, y: 1 },
];

function updatePos(p) {
  return [
    { x: p.x + 1, y: p.y },
    { x: p.x, y: p.y + 1 },
  ];
}

// ListOfPos Maze -> ListOfPos
// produce a filtered list of pos based on the current pos (if pos is on the wall remove it)

function checkPos(lop, m) {
  return lop.filter((el) => {
    let getIndex = el.x + el.y * Math.sqrt(m.length);
    return m[getIndex] === true;
  });
}

solveMazeBtn.addEventListener("click", function() {
  solvable(currentMaze, { x: 0, y: 0 }, new Set());
});

resetBtn.addEventListener("click", function() {
  randomMaze();
});

randomMaze();
