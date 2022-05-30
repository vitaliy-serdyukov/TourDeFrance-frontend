out('we making fetch on riders here');

const ridersUrl = baseurl + 'riders';
const riderMap = new Map();

out(ridersUrl);

function fetchAllRiders() {
   out("calling all riders here");
  return fetch(ridersUrl).then(response => response.json());
}

async function createRiderMap() {
  /*  out("vis alle kandidater");*/
  const riderList = await fetchAllRiders();
  // sorting our array with riders by rider time in descending (reverse) order
  riderList.reverse((a, b) => 'a.riderTime'.localeCompare('b.riderTime'));
  out(riderList);
  riderList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })
}
