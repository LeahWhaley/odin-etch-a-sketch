console.log("Hello!");

function createGrid() {
    // SET container to grid container div
    const container = document.querySelector(".container");

    for (let i = 0; i < totalDivs; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < totalDivs; j++) {
            // CREATE div
            const square = document.createElement("div");

            // SET div.style
            square.classList.add("item");
            // CREATE eventListener onMouseEnter
            square.addEventListener("mouseover", function(e) {
                // SET background color
                e.target.style.background = "black";
            });

            // ATTACH div to container
            row.appendChild(square);

        }
        container.appendChild(row);
    }
}

function askUserGridSize() {
    // PROMPT num of squares
    let input = prompt("How many squares per side for new grid?");
    // IF input > MAX THEN
    if ( input > MAX ) {
        // SET totalDivs to MAX
        removeGrid();
        totalDivs = MAX;
        // ALERT user input > MAX
        alert("Max number of squares per side is 100!");
    // ELSE
    } else {
        // SET totalDivs to input
        removeGrid();
        totalDivs = input;
    }
    // CALL createGrid()
    createGrid();
}

function removeGrid() {
    const container = document.querySelector(".container");
    // FOR totalDivs
    for (let i = 0; i < totalDivs; i++) {
        container.removeChild(container.firstChild);
    }
        // REMOVE grid div from container grid
    // END FOR
}

// SET MAX number of squares to 100
let MAX = 100;
// INITIALIZE totalDivs to 16
let totalDivs = 16;

createGrid();

const button = document.querySelector(".size");
button.addEventListener("click", () => {
    askUserGridSize();
});