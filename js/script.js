const form = document.querySelector('form')
const email = document.getElementById('email')
const btn = document.getElementById('header-button')
const modal = document.getElementsByClassName('header-button_form')

form.addEventListener('submit', function (event) {
  console.log(form.elements.value.value)
  event.preventDefault()
})

email.addEventListener('submit', function (event) {
  console.log(form.elements.email.email)
  event.preventDefault()
})

btn.onclick = function () {
  return form.modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}