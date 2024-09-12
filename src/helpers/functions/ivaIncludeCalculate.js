export const ivaInclude = (price, iva) => {
  const priceToNumb = Number(price);
  const result = priceToNumb + (price / 100) * 21;
  if (!iva) {
    return result.toFixed(2);
  } else {
    return priceToNumb.toFixed(2);
  }
};
