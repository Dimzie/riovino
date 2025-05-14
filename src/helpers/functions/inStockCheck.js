export const inStockCheck = qty => {
  if (qty <= 0) {
    return <p>No disponible</p>;
  } else {
    return qty + " bot.";
  }
};
