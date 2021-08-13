// Variables
// -- DOM elements
const vehicles = document.querySelector('#vehicles');
const selectElement = document.querySelector('#filter');

// -- LOGIC
let filter = '';

// Functions
const displayVehicles = () => {
  fetch('https://citybee-app.herokuapp.com/vehicles/' + filter)
    .then((response) => response.json())
    .then((result) => {
      vehicles.innerHTML = `
        
       <table class=" table table-sm table-hover container">
        <thead>
          <tr class='row justify-content-center'>
            <th class='text-center col-3' scope="col">Model</th>
            <th class='text-center col-3' scope="col">Number Plate</th>
            <th class='text-center col-3' scope="col">Country</th>
            <th class='text-center col-3' scope="col">Hourly price</th>
          </tr>
        </thead>
        <tbody>
          ${result.reduce((a, v) => {
            a += `
            <tr class='row justify-content-center'>
              <td class='text-center col-3'>${v.model_id.name}</td>
              <td class='text-center col-3'>${v.number_plate}</td>
              <td class='text-center col-3'>${v.country_location.toUpperCase()}</td>
              <td class='text-center col-3'>${(
                v.model_id.hour_price * 1.21
              ).toFixed(2)}€</td>
            </tr>
            `;
            return a;
          }, '')}
        </tbody>
      </table>
      `;
    });
};

const countryFilter = (e) => {
  filter = e.target.value;
  displayVehicles();
};

// Events

selectElement.addEventListener('change', countryFilter);
document.addEventListener('DOMContentLoaded', displayVehicles);
