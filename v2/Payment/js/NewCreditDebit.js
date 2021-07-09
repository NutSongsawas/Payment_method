/* global $, CardValidator */

(() => {
  const newCreditDebits = $('.mz-new-credit-debit');
  const newCreditDebits1 = $('#saved-amway-card-options-instalment-content-1');
  const newCreditDebits2 = $('#saved-amway-card-options');
  const inputs = newCreditDebits.find('input');

  const newAmwayCardOptions = $('#new-amway-card-options');

  newCreditDebits.on('new:reset', function resetNewInputs() {
    inputs.prop('checked', false);
    inputs.val('');
    newAmwayCardOptions.collapse('hide');
  });

  const numberInputs = newCreditDebits.find(
    '.mz-new-credit-debit__number input'
  );
  const expiryDateInputs = newCreditDebits.find(
    '.mz-new-credit-debit__expiry-date input'
  );
  const nameInputs = newCreditDebits.find(
    '.mz-new-credit-debit__name input'
  );
const codeInputs = newCreditDebits.find(
    '.mz-new-credit-debit__security-code input'
  );
  const cvvInputs = newCreditDebits1.find(
    '.mz-amway-card-options__cvv-input input'
  );
const cvvInputs2 = newCreditDebits2.find(
    '.mz-amway-card-options__cvv-input input'
  );
  const NUMBER_SEPARATOR = ' - ';
  const EXPIRY_DATE_SEPARATOR = ' / ';

  numberInputs.attr(
    'maxlength',
    ($.maxCardLength + NUMBER_SEPARATOR.length * $.maxGap) - 3
  );
  expiryDateInputs.attr('maxlength', 4 + EXPIRY_DATE_SEPARATOR.length);

  function isRemoving({ value, separator }) {
    return value.endsWith(separator.slice(0, -1));
  }

  function removeSeparator({ value, separator }) {
    return (isRemoving({ value, separator })
      ? value.slice(0, -separator.length)
      : value
    )
      .split(separator)
      .join('');
  }

  function insertSeparator({ text, shouldInsert, separator }) {
    return text
      .split('')
      .reduce(
        (acc, char, index) =>
          /\d/.test(char)
            ? `${acc}${char}${shouldInsert(index) ? separator : ''}`
            : acc,
        ''
      );
  }

  numberInputs.on('input', function insertDash() {
    const input = $(this);
    const separator = NUMBER_SEPARATOR;

    const number = removeSeparator({
      value: input.val(),
      separator
    });
    
    if (number.length === 0) return
    if (!CardValidator.number(number).card) {
      $(`#${input[0].name}-error`).addClass( "--has-error" )
      $(`#${input[0].name}-error`).text("กรุณาใส่ตัวเลขเท่านั้น")
    }else {
      $(`#${input[0].name}-error`).removeClass( "--has-error" )
      $(`#${input[0].name}-error`).text("")
    }

    const card = CardValidator.number(number).card || $.defaultCard;
    
    input.val(
      insertSeparator({
        text: number,
        shouldInsert: index => card.gaps.includes(index + 1),
        separator
      })
    );
    input.trigger('keyup');
  });

  expiryDateInputs.on('input', function insertDash() {
    let start = this.selectionStart;
    let end = this.selectionEnd;

    const input = $(this);
    const value = input.val();
    const separator = EXPIRY_DATE_SEPARATOR;

    const expiryDate = removeSeparator({
      value,
      separator
    });

    if (expiryDate.length === 0) return;

    const shouldInsert = index => index === 1;

    input.val(
      insertSeparator({
        text: expiryDate,
        shouldInsert,
        separator
      })
    );
    input.trigger('keyup');

    // Keep cursor position in sync with separator
    if (shouldInsert(start - 1)) start += separator.length;
    if (shouldInsert(end - 1)) end += separator.length;

    this.setSelectionRange(start, end);
  });
  nameInputs.attr('maxlength',50);
  var valuepre = ""
  nameInputs.on('input', function insertDash() {
    const input = $(this);

    const value = input.val();
    
    if (value.length === 0) {
      valuepre = ""; 
      return;
    }
    regEx = /^([a-zA-Z]|\s|\.|-)+$/;
    
    if(!regEx.test(value)){
      input.val(valuepre);
        $(`#${input[0].name}-error`).text("")
        $(`#${input[0].name}-error`).addClass( "--has-error" )
        $(`#${input[0].name}-error`).text("กรุณาใส่ชื่อเป็นตัวภาษาอังกฤษ")  
      

      return ;
    }else if(regEx.test(value)){
        $(`#${input[0].name}-error`).text("")
        $(`#${input[0].name}-error`).removeClass( "--has-error" )
  
      valuepre = value.toUpperCase()
      input.val(value.toUpperCase());
      
      return true;
    }
      
     
    // if (number.length === 0) return
    // if (!CardValidator.number(number).card) {
    //   $('#card-number-error').addClass( "--has-error" )
    //   $('#card-number-error').text("กรุณาใส่ตัวเลขเท่านั้น")
    // }else {
    //   $('#card-number-error').removeClass( "--has-error" )
    //   $('#card-number-error').text("")
    // }

   

            
    // input.val(input.val().toUpperCase())

    
  });
  var codeInputsPre = ""
  codeInputs.on('input', function insertDash() {


    const input = $(this);
    const value = input.val();
    const separator = "";

    if (value.length === 0) {
      codeInputsPre = ""; 
      return;
    }
    regEx = /^[0-9]+$/;
    if(!regEx.test(value)){
      input.val(codeInputsPre);
   

      return ;
    }else if(regEx.test(value)){

      codeInputsPre = value.toUpperCase()
      input.val(value.toUpperCase());
      
      return true;
    }

    
  });
  var cvvInputsPre = ""
  cvvInputs.on('input', function insertDash() {


    const input = $(this);
    const value = input.val();
    const separator = "";

    if (value.length === 0) {
      cvvInputsPre = ""; 
      return;
    }
    regEx = /^[0-9]+$/;
    if(!regEx.test(value)){
      input.val(cvvInputsPre);
   

      return ;
    }else if(regEx.test(value)){

      cvvInputsPre = value.toUpperCase()
      input.val(value.toUpperCase());
      
      return true;
    }

    
  });
  var cvvInputs2Pre = ""
  cvvInputs2.on('input', function insertDash() {


    const input = $(this);
    const value = input.val();
    const separator = "";

    if (value.length === 0) {
      cvvInputs2Pre = ""; 
      return;
    }
    regEx = /^[0-9]+$/;
    if(!regEx.test(value)){
      input.val(cvvInputs2Pre);
   

      return ;
    }else if(regEx.test(value)){

      cvvInputs2Pre = value.toUpperCase()
      input.val(value.toUpperCase());
      
      return true;
    }

    
  });
  $.sanitizeCardInputs = function sanitizeCardInputs() {
    numberInputs.each(function sanitizeNameInput() {
      const input = $(this);

      input.val(
        removeSeparator({
          value: input.val(),
          separator: NUMBER_SEPARATOR
        })
      );
    });

    expiryDateInputs.each(function sanitizeExpiryDateInput() {
      const input = $(this);

      input.val(
        removeSeparator({
          value: input.val(),
          separator: EXPIRY_DATE_SEPARATOR
        })
      );
    });
  };
})();
