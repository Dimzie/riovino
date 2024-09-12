export const formatTitleString = str => {
  if (typeof str !== 'string') {
    return '';
  }
  
  str = str.replace(/-/g, ' ');
  str = str.replace(/\b\w+/g, function(word) {
    return word.toLowerCase() === 'y' ? 'y' : word.charAt(0).toUpperCase() + word.slice(1);
  });
  
  return str;
};
