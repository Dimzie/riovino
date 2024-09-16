import CriticsItem from 'components/Items/CriticsItem/CriticsItem';
import React from 'react';
import { List } from './CriticsList.styled';
import { sortedCritics } from 'helpers/functions/sortedCriticsAZ';

const CriticsList = ({ critics }) => {
  return (
    <List>
      {sortedCritics(critics).map(({ critic, criticRate }, index) => (
        <CriticsItem key={index} critic={critic} criticRate={criticRate} />
      ))}
    </List>
  );
};

export default CriticsList;
