/* global $, CardValidator */
(() => {
  function getNumberFromValue(value) {
    return value
      .split('-')
      .map(chunk => chunk.trim())
      .join('');
  }

  $.validator.addMethod(
    'card-type',
    function validateCardType(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      const { card } = CardValidator.number(number);

      if (!card) return true;

      return $.supportedCardTypes.includes(card.type);
    },
    'เฉพาะ VISA และ Mastercard เท่านั้น'
  );


  $.validator.addMethod(
    'card-number',
    function validateCardNumber(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      // console.log(`number`, number.length)
      const { isValid } = CardValidator.number(number);

      return !(number.length < 16);
    },
    'กรุณาใส่หมายเลขบัตร 16 หลัก'
  );
  $.validator.addMethod(
    'card-number-only',
    function validateCardNumberOnly(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      // const { isValid } = CardValidator.number(number);

      
     console.log(`number`, CardValidator.number(number))
      return false
      // return this.optional(element) || re.test(value);
    },
    'กรุณาใส่ตัวเลขเท่านั้น'
  );

  $.validator.addMethod(
    'card-expiry-date',
    function validateCardExpiryDate(value, element) {
      if (!value) return true;

      const { isValid, month, year } = CardValidator.expirationDate(value);

      if (isValid) {
        $(element).val(`${month.toString().padStart(2, '0')} / ${year}`);
      } 
      // const date = new Date()
      return isValid;
    },
    'วันหมดอายุไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-security-code',
    function validateCardSecurityCode(value, element) {
      if (!value) return true;

      const maxLength = $(element).attr('maxlength');
      const { isValid } = CardValidator.cvv(value, maxLength);

      return isValid;
    },
    'CVV ไม่ถูกต้อง'
  );
  $.validator.addMethod(
    'card-number1',
    function validateCardNumber(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      const { isValid } = CardValidator.number(number);

      return isValid;
    },
    'หมายเลขบัตรเครดิต/บัตรเดบิตไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-expiry-date-1',
    function validateCardExpiryDate(value, element) {
      if (!value) return true;

      const { isValid, month, year } = CardValidator.expirationDate(value);

      if (isValid) {
        $(element).val(`${month.toString().padStart(2, '0')} / ${year}`);
      }
      const date = new Date()

      return (month < 32 || year > date.getFullYear());
    },
    'วันหมดอายุไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-security-code-1',
    function validateCardSecurityCode(value, element) {
      if (!value) return true;

      const maxLength = $(element).attr('maxlength');
      const { isValid } = CardValidator.cvv(value, maxLength);

      return isValid;
    },
    'CVV ไม่ถูกต้อง'
  );


  $.validator.addMethod(
    'card-number2',
    function validateCardNumber(value) {
      if (!value) return true;

      const number = getNumberFromValue(value);
      const { isValid } = CardValidator.number(number);

      return isValid;
    },
    'หมายเลขบัตรเครดิต/บัตรเดบิตไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-expiry-date-2',
    function validateCardExpiryDate(value, element) {
      if (!value) return true;

      const { isValid, month, year } = CardValidator.expirationDate(value);

      if (isValid) {
        $(element).val(`${month.toString().padStart(2, '0')} / ${year}`);
      }
      const date = new Date()

      return (month < 32 || year > date.getFullYear());
    },
    'วันหมดอายุไม่ถูกต้อง'
  );

  $.validator.addMethod(
    'card-security-code-2',
    function validateCardSecurityCode(value, element) {
      if (!value) return true;

      const maxLength = $(element).attr('maxlength');
      const { isValid } = CardValidator.cvv(value, maxLength);

      return isValid;
    },
    'CVV ไม่ถูกต้อง'
  );
})();
