/* global $, CardValidator */
(() => {
  function getNumberFromValue(value) {
    return value
      .split('-')
      .map(chunk => chunk.trim())
      .join('');
  }

  
})();
