// Variables
// -- DOM elements
const linkButtons = document.querySelectorAll('.link');

// Functions

const linkPage = (e) => {
  if (e.target.innerText === 'Models')
    return (location.href = './views/models.html');

  return (location.href = './views/vehicles.html');
};

// Events
linkButtons.forEach((button) => button.addEventListener('click', linkPage));
