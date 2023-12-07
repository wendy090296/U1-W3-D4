// creo array vuoto e faccio un push dei numeri

const arrayOfNumbers = [];

for (let i = 1; i <= 90; i++) {
  arrayOfNumbers.push(i);
}
console.log(arrayOfNumbers);

const Cells = function (numbers) {
  const masterBoard = document.getElementById("master-board");
  for (let i = 0; i < numbers.length; i++) {
    const numberCellDiv = document.createElement("div");
    numberCellDiv.classList.add("number");
    const cellValue = document.createElement("h3");
    cellValue.innerText = i + 1;
    numberCellDiv.appendChild(cellValue);
    masterBoard.appendChild(numberCellDiv);
  }
};
createBingoCells(masterboard);
