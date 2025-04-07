const handleSubmit = (event) => {
  event.preventDefault();
  const email = document.querySelector('#mail');
  const emailUzivatel = email.value;
  document.querySelector(
    '#prihlaseni',
  ).innerHTML = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${emailUzivatel}.`;
};
document.querySelector('#prihlaseni').addEventListener('submit', handleSubmit);
