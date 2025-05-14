export const extractAfterLastDash = text => {
  const lastDashIndex = text.lastIndexOf('-');
  const closingParenIndex = text.lastIndexOf(')');

  if (
    lastDashIndex === -1 ||
    closingParenIndex === -1 ||
    lastDashIndex > closingParenIndex
  ) {
    return null; // если нет нужных символов
  }

  return text.slice(lastDashIndex + 1, closingParenIndex).trim().toLowerCase() + ".";
};
