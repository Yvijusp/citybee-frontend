// Variables
// -- DOM elements
const vehicles = document.querySelector('#vehicles');
const selectElement = document.querySelector('#filter');

// -- LOGIC
let filter = '';

// Functions
const displayVehicles = () => {
  fetch('http://localhost:5000/vehicles/' + filter)
    .then((response) => response.json())
    .then((result) => {
      vehicles.innerHTML = `
        
       <table class=" table table-sm table-striped container">
        <thead>
          <tr class='row justify-content-center'>
            <th class='text-center col-3' scope="col">Model</th>
            <th class='text-center col-3' scope="col">Number Plate</th>
            <th class='text-center col-3' scope="col">Country</th>
            <th class='text-center col-3' scope="col">Hourly price</th>
          </tr>
        </thead>
        <tbody>
          <tr class='row justify-content-center'>
              ${result.reduce((a, v) => {
                a += `
            <td class='text-center col-3'>${v.model_id.name}</td>
            <td class='text-center col-3'>${v.number_plate}</td>
            <td class='text-center col-3'>${v.country_location}</td>
            <td class='text-center col-3'>${(
              v.model_id.hour_price * 1.21
            ).toFixed(2)}€</td>
            `;
                return a;
              }, '')}
          </tr>
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
