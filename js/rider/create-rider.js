//generate api from config file
const url = baseurl + createurl + 'rider';

//createFormEventListener when html is loaded
document.addEventListener('DOMContentLoaded', createFormEventListener);

//add eventlistener to html form
const teamSelector = document.getElementById("teamSelect");
let selectedTeam;

let riderForm;

//preventDefault prevents form to execute default submit (send an empty form to backend)
async function createFormEventListener() {
  await createDropDown();
  riderForm = document.getElementById('newRiderForm');
  riderForm.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(event) {
  //preventDefault prevents form to execute default submit (send an empty form to backend)
  event.preventDefault();
  const form = event.currentTarget;
  out(url);
  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson(url, formData);
    out(responseData);
    alert(formData.get('firstName').toUpperCase() + ' ' + formData.get('lastName').toUpperCase() +
      ' created');
    riderForm.reset();

  } catch (err) {
    alert(err.message);
    out(err);
  }
}

// posting rider as JSON here
async function postFormDataAsJson(url, formData) {
  const plainFormData = Object.fromEntries(formData.entries());

  const timeInSeconds = timeStringToSeconds(plainFormData.riderTime);

  let rider = {
    firstName: plainFormData.firstName,
    lastName: plainFormData.lastName,
    age: plainFormData.age,
    country: plainFormData.country,
    riderTime: timeInSeconds,
    mountainPoints: plainFormData.mountainPoints,
    sprintPoints: plainFormData.sprintPoints,
    team: {
      teamId: selectedTeam.teamId
    }
  }

  const formDataJsonString = JSON.stringify(rider);


  const fetchOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: formDataJsonString
  };

  const response = await fetch(url, fetchOptions);
  if (!response) {
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }

  return response.json();
}


// making choice of team from dropdown menu
async function createDropDown() {
  await createTeamMap();
  console.log(teamMap)
  teamMap.forEach(team => {
    const options = document.createElement("option");
    options.textContent = team.teamName;
    options.value = team.teamId;
    teamSelector.appendChild(options);
  })

  teamSelector.addEventListener("change", (event) => {
    const optionIndex = teamSelector.value;

    teamMap.forEach(team => {
      if (parseInt(optionIndex) === parseInt(team.teamId)) {
        selectedTeam = team;
        out();
      }
    })
  })
}
