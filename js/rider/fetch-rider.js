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
  const sortedList = sortListByRiderTime(riderList);
  out(riderList);
  sortedList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })
}



// sorting our list with riders by rider time in descending (reverse) order TODO doesn't work 100 procent
function sortListByRiderTime(riderList) {
  return riderList.sort((a, b) => {
    return a.riderTime - b.riderTime
  });
}

/*function getQuckestRider(sort){
  sortListByRiderTime(riderList)
  return
}*/
