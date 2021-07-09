/* global $, LineIt */
(() => {
  function loadLineButton() {
    if (window.LineIt) {
      LineIt.loadButton();
    }
  }

  window.addEventListener('resize', () => {
    loadLineButton();
  });

  loadLineButton();

  const url = $('#copy-input').val();
  $('#native-share').click(() => {
    if (navigator.share) {
      navigator
        .share({
          title: url,
          text: url,
          url
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    }
  });
})();
