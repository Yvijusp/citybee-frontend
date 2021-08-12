// Variables
// -- DOM elements
const formElement = document.querySelector('#form');
const outputElement = document.querySelector('#output');
// Functions

// Events
formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  outputElement.innerHTML = '';

  if (isNaN(+e.target.elements.price.value))
    return (outputElement.innerHTML = `Please enter a number`);

  if (!e.target.elements.model.value || !e.target.elements.price.value)
    return (outputElement.innerHTML = 'Please fill out the form');

  let model = {
    name: e.target.elements.model.value,
    hour_price: +e.target.elements.price.value,
  };

  fetch('https://citybee-app.herokuapp.com/models', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(model),
  })
    .then((response) => response.json())
    .then((result) => {
      outputElement.classList.remove('text-danger');
      outputElement.classList.add('text-success');

      outputElement.innerText = result.message;
    })
    .catch((error) => console.log(error));
});
