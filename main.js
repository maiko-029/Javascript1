
let arr = [];


function pushNumber() {
  let numberInput = document.getElementById("numberInput");
  let warning = document.getElementById("warning");
  let number = parseFloat(numberInput.value);
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }
  arr.push(number);
  numberInput.value = "";
  warning.textContent = "";
  total.value= " ";
  updateTable();
}


function editNumber(index) {
  let newNumber = prompt("Enter the new number:");
  let number = parseFloat(newNumber);
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }
  arr[index] = number;
  updateTable();
}


function removeNumber(index) {
  arr.splice(index, 1);
  updateTable();
}


function deleteNumber() {
    arr = [];
    updateTable();
    Total();
}


function Total() {

  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  document.getElementById("total").innerHTML = "TOTAL: <span>" + total + "</span>";

}


function clearNumbers() {
  arr = [ ];
  updateTable();
  Total();
  
}


function updateTable() {
  let tableBody = document.getElementById("numberTable");
  tableBody.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement("tr");
    let numberCell = document.createElement("td");
    let typeCell = document.createElement("td");
    let editCell = document.createElement("td");
    let removeCell = document.createElement("td");
    numberCell.textContent = arr[i];

    if (arr[i] % 2 === 0) {
      
      typeCell.textContent ="EVEN";
      typeCell.style.color= 'green';
      

    } else {
      
      typeCell.textContent = "ODD";
      typeCell.style.color= 'blue';
      
    }

    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.onclick = function() {
      editNumber(i);
    }
    editCell.appendChild(editButton);
    let removeButton = document.createElement("button"); 
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
      removeNumber(i);
    }
    removeCell.appendChild(removeButton);
    row.appendChild(numberCell);
    row.appendChild(typeCell);
    row.appendChild(removeCell);
    row.appendChild(editCell);
    tableBody.appendChild(row);
  }
}