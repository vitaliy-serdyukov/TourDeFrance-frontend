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
  // sorting our array with riders by rider time in descending (reverse) order TODO doesn't work 100 procent
  riderList.reverse((a, b) => 'a.riderTime'.localeCompare('b.riderTime'));
  out(riderList);
  riderList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })
}



/*/!*  const riderList = await fetchAllRiders();*!/
  let sortable = [];
  for (let rider in riderList) {
    sortable.push([rider, rider.riderTime[rider]]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  out('sortable');
  out(sortable);*/
