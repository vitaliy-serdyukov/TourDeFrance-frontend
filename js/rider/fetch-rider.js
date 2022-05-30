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
  const kandidatList = await fetchAllRiders();
  out(kandidatList);
  kandidatList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })
}