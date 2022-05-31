out('we making fetch on riders here');

const ridersUrl = baseurl + 'riders';
const riderMap = new Map();

out(ridersUrl);

function fetchAllRiders() {
  out("calling all riders here");
  return fetch(ridersUrl).then(response => response.json());
}

async function createRiderMap() {
  const riderList = await fetchAllRiders();
  const sortedList = sortByRiderTime(riderList);
  out(riderList);
  sortedList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })

 /* out('y ' + getYellowTshit(sortedList));
  out('m ' + getMountainTshirt(sortedList));
  out('g ' + getGreenTshirt(sortedList));
  out('w ' + getWhiteTshirt(riderList));*/
}


// sorting our list with riders by rider time in ascending order
function sortByRiderTime(riderList) {
  return riderList.sort((a, b) => {
    return a.riderTime - b.riderTime;
  });
}



// method to define the rider with yellow T-shirt
function getYellowTshit(timeSort) { // a yellow t-shirt
  sortByRiderTime(timeSort);
  return timeSort[0].firstName + ' ' + timeSort[0].lastName;
}


// method to define the rider with mountain T-shirt
function getMountainTshirt(riderList) {
  const mountSort = riderList.reverse((a, b) => {
    return a.mountainPoints - b.mountainPoints;
  });
  return mountSort[0].firstName + ' ' + mountSort[0].lastName;

}

// method to define the rider with green T-shirt
function getGreenTshirt(riderList) {
  const spSort = riderList.reverse((a, b) => {
    return a.sprintPoints - b.sprintPoints;
  });
  return spSort[0].firstName + ' ' + spSort[0].lastName;
}

// method to define the rider with white T-shirt
function getWhiteTshirt(riderList) {
  const tmSort = riderList.sort((a, b) => {
    return a.riderTime - b.riderTime;
  });
  if (tmSort[0].age < 26) {
    out('White T-shirt ' + tmSort[0].firstName + ' ' + tmSort[0].lastName);
    return tmSort[0].firstName + ' ' + tmSort [0].lastName;
  }
  return 'Unfortunately, no-one got the white T-shirt';
}
