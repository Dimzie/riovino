import React from 'react';

export const newLineText = ({ text }) => {
  const splitTextToNewLines = str => {
    return str.split(' ').map((word, index) => (
      <React.Fragment key={index}>
        {word}
        <br />
      </React.Fragment>
    ));
  };

  return <p>{splitTextToNewLines(text)}</p>;
};
