import CriticsItem from 'components/Items/CriticsItem/CriticsItem';
import React from 'react';
import { List } from './CriticsList.styled';



const CriticsList = ({ critics }) => {
  const sortedCritics = [...critics].sort((a, b) => {
    if (a.critic === 'Rio Vino') return -1;
    if (b.critic === 'Rio Vino') return 1;
    return a.critic.localeCompare(b.critic);
  });

  return (
    <List>
      {sortedCritics.map(({ critic, criticRate }, index) => (
        <CriticsItem
          key={index}
          critic={critic}
          criticRate={criticRate}
        />
      ))}
    </List>
  );
};

export default CriticsList;
