const nav = document.querySelector('.js-nav')
const menuToggle = document.querySelector('.js-menu-toggle')
const menuLinks = document.querySelectorAll('.js-menu-link')
const menuIsOpen = () => nav.classList.contains('is-open')

const toggleMenu = () => {
  nav.classList.toggle('is-open')
  document.documentElement.classList.toggle('no-scroll')
}

menuToggle.addEventListener('click', () => toggleMenu())
menuLinks.forEach(link => link.addEventListener('click', () => toggleMenu()))

// Close modal with ESC key
document.addEventListener('keydown', (e) => (e.keyCode == 27) && menuIsOpen() && toggleMenu())