out('Update kandidat');

let riderUpdateUrl = baseurl + updateurl + 'rider/';
out(riderUpdateUrl);

async function updateRider(rider) {
  out('Here is update rider' + rider);
  url = riderUpdateUrl + rider.riderId;
  out(url);
  out(rider.toString());
  const jsonString = JSON.stringify(rider);
  out(jsonString);
  const fetchOptions = {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: jsonString
  }

  //calls API (Backend) and wait for return
  const response = await fetch(url, fetchOptions);

  out(response);
  if (!response) {
    alert('Something went wrong');
    out("Det gik ikke godt med update");
  } else {
    if (response.ok) {
      alert(rider.firstName + ' from ' + rider.team.teamName + ' has been updated');
    } else {
      alert('Something went wrong\nERROR status: ' + response.status);
    }
  }

  return response;
}
