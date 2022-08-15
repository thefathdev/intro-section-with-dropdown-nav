// Query selectors
const sidebar = document.querySelector('.side-navbar')
const openBtn = document.querySelector('.open-menu')
const closeBtn = document.querySelector('.close-menu')
const overlay = document.querySelector('.overlay')

const dropdowns = document.querySelectorAll('.dropdown')
const dropdownBtns = document.querySelectorAll('.dropdown__btn')

// Functions
function openSidebar() {
  sidebar.dataset.state = 'open'
  overlay.dataset.state = 'open'
}

function closeSidebar() {
  sidebar.dataset.state = 'close'
  overlay.dataset.state = 'close'
}

function toggleDropdown(dropdown) {
  dropdown.dataset.state =
    dropdown.dataset.state === 'expanded' ? 'collapsed' : 'expanded'
}

// Event Listener
openBtn.addEventListener('click', openSidebar)

closeBtn.addEventListener('click', closeSidebar)

overlay.addEventListener('click', closeSidebar)

dropdowns.forEach((dropdown, i) => {
  dropdownBtns[i].addEventListener('click', () => {
    toggleDropdown(dropdown)
  })
})
