export const formatString = str => {
  // Replace hyphens with spaces
  str = str.replace(/-/g, ' ');
  // Capitalize each word except 'y'
  str = str.replace(/\b\w+/g, function (word) {
    return word.toLowerCase() === 'y'
      ? 'y'
      : word.charAt(0).toUpperCase() + word.slice(1);
  });
  return str;
};
