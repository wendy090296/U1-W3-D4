// creo array vuoto che conterrà i 90 numeri e verrà utilizzato per generare i numeri random.

const arrayOfNumbers = [];
console.log(arrayOfNumbers);

const masterBoard = document.getElementById("master-board"); // seleziono il contenitore dei numeri
// console.log(masterBoard);
const cells = function (numbers) {
  // creo la funzione per generare i numeri e le sue celle.
  for (let i = 0; i < numbers; i++) {
    const numberCellDiv = document.createElement("div"); // contenitore della cella
    numberCellDiv.classList.add("number");
    numberCellDiv.classList.add("cell-" + (i + 1)); // questa classe é per selezionare la cella specifica allo generarsi del numero

    const cellValue = document.createElement("span"); //creo il contenuto della cella (il numero)
    cellValue.innerText = i + 1;
    numberCellDiv.appendChild(cellValue); // appendo il numero alla sua cella
    masterBoard.appendChild(numberCellDiv); // appena la cella al contenitore generale
    arrayOfNumbers.push(i + 1); // pusho tutti i numeri nell'array d partenza
  }
};
cells(90);

const estraiNumber = document.getElementById("title2"); // seleziono il bottone estrai numero
estraiNumber.addEventListener("click", function (e) {
  if (arrayOfNumbers.length === 0) {
    // se la lunghezza dell'array =0 (array finito)
    return alert("Tutti i numeri sono stati estratti ");
  }
  console.log("lunghezza array", arrayOfNumbers.length);
  // gli dico come comportarsi al click
  const randomNumberIndex = Math.floor(
    // genero indice random dell'array
    Math.random() * (arrayOfNumbers.length - 1)
  );
  const randomNumber = arrayOfNumbers[randomNumberIndex];
  console.log("index", randomNumberIndex);
  console.log("numero random", randomNumber);
  const selected = document.querySelector(".cell-" + randomNumber); // seleziono la cella con il numero estratto
  selected.classList.add("selected");
  //   console.log(selected);
  document.getElementById("extracted-number").innerText = randomNumber; // mostro il numero estratto

  // faccio in modo che non venga estratto lo stesso numero 2 volte
  arrayOfNumbers.splice(randomNumberIndex, 1);
});
