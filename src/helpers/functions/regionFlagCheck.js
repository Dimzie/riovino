import { Region, RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { spainFlag } from 'images/images.index';

export const regionFlagCheck = name => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('ribera del duero')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Ribera Del Duero</Region>
      </>
    );
  } else if (lowerName.includes('rueda')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Rueda</Region>
      </>
    );
  } else if (lowerName.includes('somontano')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Somontano</Region>
      </>
    );
  } else if (lowerName.includes('rias baixas')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Rias Baixas</Region>
      </>
    );
  } else if (lowerName.includes('valdeorras')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Valdeorras</Region>
      </>
    );
  } 
};
