// Query selectors
const sidebar = document.querySelector('.side-navbar')
const openBtn = document.querySelector('.open-menu')
const closeBtn = document.querySelector('.close-menu')
const overlay = document.querySelector('.overlay')

// Event Listener
openBtn.addEventListener('click', () => {
  sidebar.dataset.state = 'open'
  overlay.dataset.state = 'open'
})

closeBtn.addEventListener('click', () => {
  sidebar.dataset.state = 'close'
  overlay.dataset.state = 'close'
})

overlay.addEventListener('click', () => {
  sidebar.dataset.state = 'close'
  overlay.dataset.state = 'close'
})
