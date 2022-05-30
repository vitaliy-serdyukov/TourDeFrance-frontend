out('making the table of riders here');

const riderTable = document.getElementById("ridersTable");
document.addEventListener('DOMContentLoaded', createTableFromMap);

const modalBox = document.getElementById("myModal");
const spanClose = document.getElementsByClassName("close")[0];

// inputs in modal box
const inpFirstName = document.getElementById('inpFirstName');
const inpLastName = document.getElementById('inpLastName');
const inpAge = document.getElementById('inpAge');
const inpCountry = document.getElementById('inpCountry');
const inpRiderTime = document.getElementById('inpRiderTime');
const pbSubmitUpdate = document.getElementById('submitUpdate');


window.onclick = function (event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
}

async function createTableFromMap() {
  await createRiderMap();
  out("make the table");
  riderMap.forEach(rider => addRow(rider)
  )
}

function addRow(rider) {

  const rowRider = riderTable.rows.length;
  let row = riderTable.insertRow(rowRider);
  let colRider = 0;

  let cell = row.insertCell(colRider++);
  cell.innerText = rider.riderId;

  cell = row.insertCell(colRider++);
  cell.innerText = rider.firstName;

  cell = row.insertCell(colRider++);
  cell.innerText = rider.lastName;

  cell = row.insertCell(colRider++);
  cell.innerText = rider.age;

  cell = row.insertCell(colRider++);
  cell.innerText = rider.country;

  cell = row.insertCell(colRider++);
  cell.innerText = rider.riderTime;

  cell = row.insertCell(colRider++);
  cell.innerText = '0';

  cell = row.insertCell(colRider++);
  cell.innerText = '0';

  cell = row.insertCell(colRider++);
  cell.innerText = rider.team.teamName;


  // update button
  cell = row.insertCell(colRider++);
  const pbUpdate = document.createElement('button');
  pbUpdate.innerText = 'Update info';
  pbUpdate.onclick = function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    modalBox.style.display = 'block';

    inpFirstName.value = rider.firstName;
    inpLastName.value = rider.lastName;
    inpAge.value = rider.age;
    inpCountry.value = rider.country;
    inpRiderTime.value = rider.riderTime;

    pbSubmitUpdate.onclick = async function () {
      rider.firstName = inpFirstName.value;
      rider.lastName = inpLastName.value;
      rider.age = inpAge.value;
      rider.country = inpCountry.value;
      rider.riderTime = inpRiderTime.value;
      // input points here
      await updateRow(rider);
      modalBox.style.display = 'none';
    }
  }
  spanClose.onclick = function () {
    modalBox.style.display = 'none';
  }
  cell.appendChild(pbUpdate);


  cell = row.insertCell(colRider++);
  const pbDelete = document.createElement('button');
  pbDelete.innerText = 'Delete';
  pbDelete.onclick = async function () {
    await deleteRider(rider);
    location.reload();
  }
  cell.appendChild(pbDelete);

}

async function updateRow(rider) {
  rider.firstName = inpFirstName.value;
  rider.lastName = inpLastName.value;
  rider.age = inpAge.value;
  rider.country = inpCountry.value;
  rider.riderTime = inpRiderTime.value;
  const response = await updateRider(rider);
  out(response);
  //crazy rule, Reload page
  location.reload();
}
