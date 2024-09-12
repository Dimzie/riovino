import React from 'react';
import {
  CriticName,
  CriticContainer,
  Li,
  CriticScore,
} from './CriticsItem.styled';

const CriticsItem = ({ critic, criticRate }) => {
  const criticRioVinoColor = critic === 'Rio Vino' ? { color: '#c0aa41' } : {};

  return (
    <Li>
      <CriticContainer>
        <CriticScore>{criticRate}</CriticScore>
      </CriticContainer>
      <CriticName style={criticRioVinoColor}>{critic}</CriticName>
    </Li>
  );
};

export default CriticsItem;
