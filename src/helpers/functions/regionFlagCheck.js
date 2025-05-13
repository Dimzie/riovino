import { Region, RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { spainFlag } from 'images/images.index';

export const regionFlagCheck = name => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('ribera del duero')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>DO. Ribera Del Duero</Region>
      </>
    );
  } else if (lowerName.includes('rueda')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>DO. Rueda</Region>
      </>
    );
  } else if (lowerName.includes('somontano')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>DO. Somontano</Region>
      </>
    );
  }
};
