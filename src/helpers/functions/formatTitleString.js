export const formatTitleString = text => {
  const matches = text.match(/(["'])(.*?)\1/g);

  if (!matches) return [];

  return matches.map(str => {
    const content = str.slice(1, -1);
    return content
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  });
};
