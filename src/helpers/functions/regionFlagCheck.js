import { RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { franceFlag, spainFlag } from 'images/images.index';

export const regionFlagCheck = region => {
  if (
    region.includes('Ribera del Duero') ||
    region.includes('Rioja') ||
    region.includes('Rías Baixas') ||
    region.includes('Rueda') ||
    region.includes('Navarra') ||
    region.includes('Jerez') ||
    region.includes('Málaga') ||
    region.includes('Huelva')
  ) {
    return <RegionImg src={spainFlag} alt={region} height="10" />;
  } else if (region.includes('Languedoc-Rosellón')) {
    return <RegionImg src={franceFlag} alt={region} height="10" />;
  }
};
