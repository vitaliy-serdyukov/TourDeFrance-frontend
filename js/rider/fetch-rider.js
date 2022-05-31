out('we making fetch on riders here');

const ridersUrl = baseurl + 'riders';
const riderMap = new Map();

out(ridersUrl);

function fetchAllRiders() {
  out("calling all riders here");
  return fetch(ridersUrl).then(response => response.json());
}

async function createRiderMap() {
  /*  out("show all riders");*/
  const riderList = await fetchAllRiders();
  const sortedList = sortByRiderTime(riderList);
  out(riderList);
  sortedList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })


  getQuckestRider(sortedList);
  const mPoints = getWhiteTshirt(sortedList);
  out(mPoints);


  getWhiteTshirt(riderList);
}



// sorting our list with riders by rider time in ascending order
function sortByRiderTime(riderList) {
  return riderList.sort((a, b) => {
    return a.riderTime - b.riderTime;
  });
}

function getQuckestRider(timeSort){ // a yellow t-shirt
  sortByRiderTime(timeSort);
  out(timeSort[0]);
  return timeSort[0];
}

function sortByMountainPoints(riderList) {
  return riderList.sort((a, b) => {
    return a.mountainPoints - b.mountainPoints;
  });
}

function sortBySprintPoints(riderList) {
  return riderList.sort((a, b) => {
    return a.sprintPoints - b.sprintPoints;
  });
}

function getWhiteTshirt(riderList) {
  const timeSort = riderList.sort((a, b) => {
    return a.riderTime - b.riderTime;
  });
  if(timeSort[0].age < 26){
    out('White T-shirt '+  timeSort[0].firstName + ' ' + timeSort[0].lastName);
    return timeSort[0];
  }
  return out('Nobody should have the white T-shirt');
}
