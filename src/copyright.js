// Copyright
const currentYear = new Date().getFullYear();

window.addEventListener('DOMContentLoaded', () => {
  const span = document.querySelectorAll('.copyright');
  span.forEach((item) => {
    item.innerHTML = currentYear;
  });
});
