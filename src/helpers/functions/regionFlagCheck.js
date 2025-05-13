import { Region, RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { spainFlag } from 'images/images.index';

export const regionFlagCheck = name => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('ribera del duero')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>Ribera Del Duero</Region>
      </>
    );
  } else if (lowerName.includes('rueda')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>Rueda</Region>
      </>
    );
  }
};
