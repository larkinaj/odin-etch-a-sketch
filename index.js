const body = document.querySelector('body')
const container = document.createElement('div')
const chooseDimensions = document.createElement('button')

chooseDimensions.innerText = "Click Here To Select Size Of Grid"
chooseDimensions.setAttribute('id', "choose-button")
container.classList.add("container");

body.appendChild(chooseDimensions)
body.appendChild(container)



const findDimensions = function () {
  let numOfSquares = prompt("What would you like the dimensions of your grid to be? (1-100)");
  while (numOfSquares < 1 || numOfSquares > 100 || /\d/.test(numOfSquares) == false) {
    if (numOfSquares === null || numOfSquares === "") break
    numOfSquares = prompt("Please select a number between 1 and 100")
  }
  return numOfSquares
}

const createBoard = (dimensions) => {
  for (let i = 1; i <= dimensions; i++) {
    const row = document.createElement('div')
    row.classList.add('row');
    row.setAttribute('id', 'row-' + i);
    for (let j = 1; j <= dimensions; j++) {
      const column = document.createElement("div")
      column.classList.add('column');
      column.setAttribute('id', 'row-' + i + '-' + 'col-' + j);
      row.appendChild(column)
    }
    container.appendChild(row);
  }
}

const addHoverListeners = () => {
  const grids = document.querySelectorAll('.column')
  for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener('mouseover', (event)=> {
      grids[i].classList.add('hovered-grid')
    })
  }  
}

chooseDimensions.addEventListener("click", (event) => {
  container.innerHTML = "";
  createBoard(findDimensions())
  addHoverListeners()
})





