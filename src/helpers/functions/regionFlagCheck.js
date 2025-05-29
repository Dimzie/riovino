import { Region, RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { franceFlag, italyFlag, spainFlag } from 'images/images.index';

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
  } else if (lowerName.includes('castilla la mancha')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Castilla-La Mancha</Region>
      </>
    );
  } else if (lowerName.includes('penedes')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Penedès</Region>
      </>
    );
  } else if (lowerName.includes('priorat')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O.Q Priorat</Region>
      </>
    );
  } else if (lowerName.includes('bierzo')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Bierzo</Region>
      </>
    );
  } else if (lowerName.includes('castilla y leon')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Castilla y Leon</Region>
      </>
    );
  } else if (lowerName.includes('toro')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O. Toro</Region>
      </>
    );
  } else if (lowerName.includes('rioja')) {
    return (
      <>
        <RegionImg src={spainFlag} alt="spain" height="10" />
        <Region>D.O.Ca. Rioja</Region>
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
  } else if (lowerName.includes('pomerol')) {
    return (
      <>
        <RegionImg src={franceFlag} alt="spain" height="10" />
        <Region>AOC Pomerol</Region>
      </>
    );
  }

  // Italy
  else if (lowerName.includes('chianti classico')) {
    return (
      <>
        <RegionImg src={italyFlag} alt="italy" height="10" />
        <Region>DOCG Chianti Classico</Region>
      </>
    );
  }
};
