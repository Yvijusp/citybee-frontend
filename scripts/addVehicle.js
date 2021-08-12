// Variables
// -- DOM Elements
const modelSelectElement = document.querySelector('#modelSelect');
const formElement = document.querySelector('#form');
const outputElement = document.querySelector('#output');

// Functions
const createModelsSelectElement = () => {
  fetch('https://citybee-app.herokuapp.com/models')
    .then((response) => response.json())
    .then((result) => {
      modelSelectElement.innerHTML = ` <label for="select">Model Select</label>
          <select name='modelSelect' id="select" class="form-select">
            <option value="null" selected disabled>Select Model</option>
            ${result.reduce((a, v) => {
              a += `
              <option value="${v._id}">${v.name}</option>
              `;
              return a;
            }, '')}
           
          </select>
      `;
    });
};

// Events
document.addEventListener('DOMContentLoaded', createModelsSelectElement);
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const model_id = e.target.elements.modelSelect.value;

  outputElement.innerHTML = '';

  if (model_id === 'null')
    return (outputElement.innerHTML = 'Please select a model');

  if (!e.target.elements['number_plate'].value)
    return (outputElement.innerHTML = 'Please enter number plate');

  if (e.target.elements['country_location'].value === 'null')
    return (outputElement.innerHTML = 'Please select a country');

  let vehicle = {
    number_plate: e.target.elements['number_plate'].value,
    country_location: e.target.elements['country_location'].value,
  };

  fetch('https://citybee-app.herokuapp.com/vehicles/add/' + model_id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(vehicle),
  })
    .then((response) => response.json())
    .then((result) => {
      outputElement.classList.remove('text-danger');
      outputElement.classList.add('text-success');

      outputElement.innerText = result.message;
    })
    .catch((error) => console.log(error));
});
