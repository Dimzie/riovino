export const extractIvaValue = taxes => {
  if (!Array.isArray(taxes) || taxes.length === 0) return 0;
  const match = taxes[0]?.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
};
export const priceWithIva = (price, iva) => {
  const priceToNum = Number(price);
  if (!iva) return priceToNum.toFixed(2);
  return (priceToNum + (priceToNum * iva) / 100).toFixed(2);
};
