const scriptURL = 'https://script.google.com/macros/s/AKfycbzdAh7lyO6toEAL2yPcOK8ZnYNZ0DJ570xELQKbQRUuSmzRtesaPkUSnJedYqubIlWF1g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  
  e.preventDefault()
  
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! Form is submitted" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})