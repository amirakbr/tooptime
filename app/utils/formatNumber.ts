export const convertToFarsiDigits = (input: string) => {
  if (input) {
    const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return input.replace(/\d/g, (digit) => farsiDigits[Number(digit)]);
  } else {
    return '';
  }
};
