/* global $ */
(() => {
  const copyButtons = $('[data-copy-button]');

  function initCopyButton() {
    const copyButton = $(this);
    const id = copyButton.attr('id');
    const input = $(`#${id}-input`);
    const inputElement = input.get(0);
    const tooltip = $(`#${id}-tooltip`);

    function copy() {
      inputElement.select();
      inputElement.setSelectionRange(0, 999999);

      let succeeded = false;

      try {
        succeeded = document.execCommand('copy');
      } catch (e) {
        console.error(e);
      }

      if (succeeded) {
        tooltip.removeClass('--active');

        window.requestAnimationFrame(() => {
          tooltip.addClass('--active');
          setTimeout(() => {
            tooltip.removeClass('--active');
          }, 1000);
        });
      }
    }

    copyButton.on('click', copy);
    input.on('click', copy);
  }

  copyButtons.each(initCopyButton);
})();
