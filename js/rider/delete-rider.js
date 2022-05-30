out('Delete rider');

let riderDeleteUrl = baseurl + deleteurl + 'rider/';
out(riderDeleteUrl);


async function deleteRider(rider) {
  riderDeleteUrl = riderDeleteUrl + rider.riderId;
  out(riderDeleteUrl);

  const fetchOptions = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  }

//calls API (Backend) and wait for return
  const response = await fetch(riderDeleteUrl, fetchOptions);

  if (!response) {
    alert('Something went wrong with delete json');
  } else {
    if (response.ok) {
      alert(rider.firstName + ' from ' + rider.team.teamName + ' has been deleted');
    } else {
      alert('Something went wrong\nERROR status: ' + response.status);
    }
  }

  return response;
}
