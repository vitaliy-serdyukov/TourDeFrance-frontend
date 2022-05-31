out('we making fetch on riders here');

const ridersUrl = baseurl + 'riders';
const riderMap = new Map();

out(ridersUrl);

function fetchAllRiders() {
  out("calling all riders here");
  return fetch(ridersUrl).then(response => response.json());
}


/**
 *  method to sort our list with riders by rider time in ascending order
  *  @return {Map} riderMap
 *  @author Vitaliy
 */

async function createRiderMap() {
  const riderList = await fetchAllRiders();
  const sortedList = sortByRiderTime(riderList);
  sortedList.forEach((rider) => {
    riderMap.set(rider.riderId, rider);
  })

// 't-shirt methods' tested here
  out('yellow ' + getYellowTshit(sortedList));
  out('mountain ' + getMountainTshirt(sortedList));
  out('green ' + getGreenTshirt(sortedList));
  out('white ' + getWhiteTshirt(riderList));
}


/**
 *  method to sort our list with riders by rider time in ascending order
 *  @param {[]} riderList
 *  @return {[]}
 *  @author Vitaliy
 */
// sorting our list with riders by rider time in ascending order
function sortByRiderTime(riderList) {
  return riderList.sort((a, b) => {
    return a.riderTime - b.riderTime;
  });
}


/**
 *  method to define the rider with yellow T-shirt
 *  @param {[]} riderList
 *  @return {string} firstname + lastname
 *  @author Vitaliy
 */

function getYellowTshit(timeSort) { // a yellow t-shirt
  sortByRiderTime(timeSort);
  /*return timeSort[0].firstName + ' ' + timeSort[0].lastName;*/
  return timeSort[0];
}


/**
 *  method to define the rider with mountain T-shirt
 *  @param {[]} riderList
 *  @return {string} firstname + lastname
 *  @author Vitaliy
 */

function getMountainTshirt(riderList) {
  const mountSort = riderList.reverse((a, b) => {
    return a.mountainPoints - b.mountainPoints;
  });
  return mountSort[0].firstName + ' ' + mountSort[0].lastName;

}

/**
 *  method to define the rider with green T-shirt
 *  @param {[]} riderList
 *  @return {string} firstname + lastname
 *  @author Vitaliy
 */

// method to define the rider with green T-shirt TODO not sure if it does work correct
function getGreenTshirt(riderList) {
  const spSort = riderList.reverse((a, b) => {
    return a.sprintPoints - b.sprintPoints;
  });
  return spSort[0].firstName + ' ' + spSort[0].lastName;
}


/**
 *  method to define the rider with white T-shirt
 *  @param {[]} riderList
 *  @return {string} firstname + lastname
 *  @author Vitaliy
 */

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
