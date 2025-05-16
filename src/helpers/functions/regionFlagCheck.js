import { Region, RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { franceFlag, spainFlag } from 'images/images.index';

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
        <Region>D.O. Rías Baixas</Region>
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

  //  France
  else if (lowerName.includes('champagne')) {
    return (
      <>
        <RegionImg src={franceFlag} alt="france" height="10" />
        <Region>AOC Champagne</Region>
      </>
    );
  } else if (lowerName.includes('cotes de provance')) {
    return (
      <>
        <RegionImg src={franceFlag} alt="spain" height="10" />
        <Region>AOC Côtes de Provence</Region>
      </>
    );
  }
};
