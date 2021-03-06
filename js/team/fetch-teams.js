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
  // sorting our list with teams by team name in ascending order
  teamList.sort((a, b) => a.teamName.localeCompare(b.teamName));
  teamList.forEach((team) => {
    teamMap.set(team.teamId, team);
  })
}
