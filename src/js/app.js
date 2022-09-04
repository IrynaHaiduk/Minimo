import initResetForm from 'Components/resetForm';
import ready, { HTML } from './utils';
import initSlick from 'Components/slick';
import changeMenuStyles from 'Components/changeMenuStyles';

ready(() => {
  HTML.classList.add('is-loaded');
  initResetForm();
  initSlick();
  changeMenuStyles();
  
  // vh
  (function (window, document) {
    const variable = '--full-viewport';
    function vh() {
      document.documentElement.style.setProperty(variable, `${window.innerHeight}px`);
    }
    vh();
    window.addEventListener('resize', vh);
    window.addEventListener('orientationchange', vh);
  })(window, document);

  // disable css transitions on window resize
  (function (window, document) {
    let resizeTimer;

    window.addEventListener('resize', () => {
      document.body.classList.add('resize-animation-stopper');
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
      }, 400);
    });
  })(window, document);
});
