// VARIABLES
// -- DOM elements
const models = document.querySelector('#models');
const modelsCount = document.querySelector('#modelscount');

// Functions
const displayModels = () => {
  fetch('https://citybee-app.herokuapp.com/models')
    .then((response) => response.json())
    .then((result) => {
      models.innerHTML = `
        <h2 class="text-center">Models</h2>
       <table class=" table table-sm table-striped container">
        <thead>
          <tr class='row justify-content-center'>
            <th class='text-center col-5' scope="col">Model</th>
            <th class='text-center col-5' scope="col">Hourly price</th>
          </tr>
        </thead>
        <tbody>
          ${result.reduce((a, v) => {
            a += `
              <tr class='row justify-content-center'>
                <td class='text-center col-5'>${v.name}</td>
                <td class='text-center col-5'>${v.hour_price}€</td> 
              </tr>           
            `;
            return a;
          }, '')}
        </tbody>
      </table>
      `;
    });
};

const displayModelCount = () => {
  fetch('https://citybee-app.herokuapp.com/modelscount')
    .then((response) => response.json())
    .then((result) => {
      modelsCount.innerHTML = `
        <h2 class="text-center">Models count</h2>
       <table class="table table-sm table-striped container">
        <thead>
          <tr class='row justify-content-center'>
            <th class='text-center col-5' scope="col">Model</th>
            <th class='text-center col-5' scope="col">Vehicle count</th>
          </tr>
        </thead>
        <tbody>
          ${result.reduce((a, v) => {
            a += `
            <tr class='row justify-content-center'>
              <td class='text-center col-5'>${v.model}</td>
              <td class='text-center col-5'>${v.vehicleCount}</td>  
            </tr>          
            `;
            return a;
          }, '')}
        </tbody>
      </table>
      `;
    });
};

// Events
document.addEventListener('DOMContentLoaded', () => {
  displayModels();
  displayModelCount();
});
