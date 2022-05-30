out('vi er i gang med at fetch team');

const teamsUrl = baseurl + 'teams';
const teamMap = new Map();

function fetchAllTeams() {
  out("calling all existing teams");
  return fetch(teamsUrl).then(response => response.json());
}



async function createTeamMap() {
  out("show all teams");
  const teamList = await fetchAllTeams();
  out(teamList);
  teamList.forEach((team) => {
    teamMap.set(team.teamId, team);
  })
}
