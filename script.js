const openHam = document.getElementById('hamburger');
const closeHam = document.getElementById('closed');
const mobileMenu = document.querySelector('.mobile-menu');

function moveMenu() {
  mobileMenu.classList.toggle('hide');
}

openHam.addEventListener('click', moveMenu);
closeHam.addEventListener('click', moveMenu);
