/**
 *  place on index to print 4 t-shirt owners
 *  @author Vitaliy
 */

const tShirtsTable = document.getElementById("tShirtsTable");
document.addEventListener('DOMContentLoaded', addRow);

function addRow() {

 /* const sortList = createRiderMap();*/

  let row = tShirtsTable.insertRow(3);

  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);

  cell1.innerText = "1";
  cell2.innerText = "2";
  cell3.innerText = "3";
  cell4.innerText = "4";
}
