// reset form init
/* eslint-disable */
export default function initResetForm() {
  const forms = document.querySelectorAll('.js-form');

  if (forms.length > 0) {
    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        setTimeout(function () {
          form.reset();
        }, 1000);
      });
    })
  }
}
