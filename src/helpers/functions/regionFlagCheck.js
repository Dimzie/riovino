import { RegionImg } from 'components/Items/TypeItem/TypeItem.styled';
import { franceFlag, spainFlag } from 'images/images.index';

export const regionFlagCheck = region => {
  if (region.includes('Languedoc-Rosellón')) {
    return <RegionImg src={franceFlag} alt={region} height="10" />;
  } else {
    return <RegionImg src={spainFlag} alt={region} height="10" />;
  }
};
