/*out('vi er i gang med at lave en tabel af partier');*/

const teamsTable = document.getElementById("teamsTable");
document.addEventListener('DOMContentLoaded', createTableFromMap);

function addRow(team) {

  const rowParti = teamsTable.rows.length;
  let row = teamsTable.insertRow(rowParti);
  let colTeam = 0;

  let cell = row.insertCell(colTeam++);
  cell.innerText = team.teamId;

  cell = row.insertCell(colTeam++);
  cell.innerText = team.teamName;
}


async function createTableFromMap() {
  await createTeamMap();
  out("create table");
  teamMap.forEach(parti => addRow(parti)
  )
}
