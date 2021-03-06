// Variables
// -- DOM elements
const navbar = document.querySelector('#navbar');

// Functions

const displayNavbar = () => {
  navbar.style.backgroundColor = '#f4f4f4';
  navbar.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light container">
  <div class="container-fluid">
    <a class="navbar-brand" href="${
      location.pathname.includes('views') ? '../index.html' : './index.html'
    }">Citybee</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav  mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="${
            location.pathname.includes('views')
              ? '../index.html'
              : './index.html'
          }">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="${
            location.pathname.includes('views')
              ? '../views/models.html'
              : './views/models.html'
          }">Models</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="${
            location.pathname.includes('views')
              ? '../views/vehicles.html'
              : './views/vehicles.html'
          }">Vehicles</a>
        </li>
         <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Admin
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="${
              location.pathname.includes('views')
                ? '../views/addModel.html'
                : './views/addModel.html'
            }">Add Model</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="${
              location.pathname.includes('views')
                ? '../views/addVehicle.html'
                : './views/addVehicle.html'
            }">Add Vehicle</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  `;

  const navLink = document.querySelectorAll('.nav-link');

  navLink.forEach((link) => {
    if (location.pathname.includes('index.html')) {
      if (link.href.includes('index.html')) return link.classList.add('active');
    }
    if (location.pathname.includes('models.html')) {
      if (link.href.includes('models.html'))
        return link.classList.add('active');
    }
    if (location.pathname.includes('vehicles.html')) {
      if (link.href.includes('vehicles.html'))
        return link.classList.add('active');
    }
    if (
      location.pathname.includes('addmodel') ||
      location.pathname.includes('addvehicle')
    ) {
      if (link.classList.contains('dropdown-toggle'))
        return link.classList.add('active');
    }
  });
};

// Events
document.addEventListener('DOMContentLoaded', displayNavbar);
