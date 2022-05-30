out('vi er i create-team');

//generate api from config file
const url = baseurl + createurl + 'team';

//createFormEventListener when html is loaded
document.addEventListener('DOMContentLoaded', createFormEventListener);

let teamForm;

//add eventlistener to html form
function createFormEventListener() {
  teamForm = document.getElementById('newTeamForm');
  teamForm.addEventListener('submit', handleFormSubmit);
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
    alert(formData.get('teamName').toUpperCase() + '   team has been created');
    teamForm.reset();

  } catch (err) {
    alert(err.message);
    out(err);
  }
}

async function postFormDataAsJson(url, formData) {

  const plainFormData = Object.fromEntries(formData.entries());
  out(plainFormData);

  const formDataJsonString = JSON.stringify(plainFormData);

  out(formDataJsonString);

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
