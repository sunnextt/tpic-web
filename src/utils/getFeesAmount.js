export const getfeesAmount = (amount) => {
  let feesamount = '';

  if (amount >= 25000 && amount <= 50000) {
    feesamount = 3500;
    return feesamount;
  } else if (amount >= 50000 && amount <= 100000) {
    feesamount = 6500;
    return feesamount;
  } else if (amount > 100000 && amount <= 200000) {
    feesamount = 10500;
    return feesamount;
  } else if (amount >= 250000 && amount <= 500000) {
    feesamount = 21000;
    return feesamount;
  } else return 0;
};
