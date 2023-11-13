const inputs = document.querySelectorAll('input, textarea');

inputs.forEach(input => {
  input.addEventListener('focus', event => {
    event.target.parentElement.classList.add('form__field--focus');
  });
  input.addEventListener('blur', event => {
    event.target.parentElement.classList.remove('form__field--focus');
  });
});
