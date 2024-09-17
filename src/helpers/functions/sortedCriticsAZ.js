export const sortedCritics = criticsListToSort => {
  return [...criticsListToSort].sort((a, b) => {
    if (a.critic === 'Rio Vino') return -1;
    if (b.critic === 'Rio Vino') return 1;
    return a.critic.localeCompare(b.critic);
  });
};
