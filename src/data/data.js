import { totalNumberOfVinos } from '../helpers/Calculate/calculate.js';
import { zaglushka } from 'images/images.index.js';

export const mainCatalogList = [
  {
    title: 'Vinos',
    img: zaglushka,
    alt: 'Imagen de vinos',
    href: '/vinos',
    id: 'vinos',
    qty: totalNumberOfVinos,
  },
  {
    title: 'Espumosos',
    img: zaglushka,
    alt: 'Imagen de espumosos',
    href: '/espumosos',
    id: 'espumosos',
    qty: '',
  },
  {
    title: 'Destilados',
    img: zaglushka,
    alt: 'Imagen de destilados',
    href: '/destilados',
    id: 'destilados',
    qty: '',
  },
];

export const vinosCatalogList = [
  {
    title: 'Vino Tinto',
    img: zaglushka,
    alt: 'Imagen de vino tinto',
    type: 'tinto',
    id: 'tinto',
    qty: 210,
  },
  {
    title: 'Vino Blanco',
    img: zaglushka,
    alt: 'Imagen de vino blanco',
    type: 'blanco',
    id: 'blanco',
    qty: 100,
  },
  {
    title: 'Vino Rosado',
    img: zaglushka,
    alt: 'Imagen de vino rosado',
    type: 'rosado',
    id: 'rosado',
    qty: 135,
  },
  {
    title: 'Vino Generoso',
    img: zaglushka,
    alt: 'Imagen de vino generoso',
    type: 'generoso',
    id: 'generoso',
    qty: 57,
  },
  {
    title: 'Vino Dulce',
    img: zaglushka,
    alt: 'Imagen de vino dulce',
    type: 'dulce',
    id: 'dulce',
    qty: 308,
  },
  {
    title: 'Vino Naranja',
    img: zaglushka,
    alt: 'Imagen de vino naranja',
    type: 'naranja',
    id: 'naranja',
    qty: 78,
  },
  {
    title: 'Vermut',
    img: zaglushka,
    alt: 'Imagen de vermut',
    type: 'vermut',
    id: 'vermut',
    qty: 34,
  },
];

export const espumososCatalogList = [
  {
    title: 'Champagne',
    img: zaglushka,
    alt: 'Imagen de champagne',
    href: '/champagnes',
    id: 'champagnes',
    qty: 210,
  },
  {
    title: 'Cava',
    img: zaglushka,
    alt: 'Imagen de cava',
    href: '/cavas',
    id: 'cavas',
    qty: 130,
  },
  {
    title: 'Corpinnat',
    img: zaglushka,
    alt: 'Imagen de corpinnat',
    href: '/corpinnates',
    id: 'corpinnates',
    qty: 79,
  },
  {
    title: 'Prosecco',
    img: zaglushka,
    alt: 'Imagen de prosecco',
    href: '/proseccos',
    id: 'proseccos',
    qty: 61,
  },
  {
    title: 'Otros Espumosos',
    img: zaglushka,
    alt: 'Imagen de otro espumosos',
    href: '/otro-espumosos',
    id: 'otro-espumosos',
    qty: 413,
  },
];

export const destiladosCatalogList = [
  {
    title: 'Ron',
    img: zaglushka,
    alt: 'Imagen de ron',
    href: '/ron',
    id: 'ron',
    qty: 413,
  },
  {
    title: 'Ginebra',
    img: zaglushka,
    alt: 'Imagen de ginebras',
    href: '/ginebras',
    id: 'ginebras',
    qty: 61,
  },
  {
    title: 'Whisky',
    img: zaglushka,
    alt: 'Imagen de whisky',
    href: '/whisky',
    id: 'whisky',
    qty: 79,
  },
  {
    title: 'Vodka',
    img: zaglushka,
    alt: 'Imagen de vodka',
    href: '/vodka',
    id: 'vodka',
    qty: 210,
  },
  {
    title: 'Cognac',
    img: zaglushka,
    alt: 'Imagen de cognac',
    href: '/Cognac',
    id: 'Cognac',
    qty: 130,
  },
  {
    title: 'Brandy',
    img: zaglushka,
    alt: 'Imagen de brandy',
    href: '/brandy',
    id: 'brandy',
    qty: 215,
  },
  {
    title: 'Pastis',
    img: zaglushka,
    alt: 'Imagen de pastis',
    href: '/pastis',
    id: 'pastis',
    qty: 467,
  },
  {
    title: 'Tequila y Mezcal',
    img: zaglushka,
    alt: 'Imagen de tequila y mezcal',
    href: '/tequila-y-mezcal',
    id: 'tequila-y-mezcal',
    qty: 47,
  },
  {
    title: 'Grappa y aguardiente',
    img: zaglushka,
    alt: 'Imagen de grappa y aguardiente',
    href: '/grappa-y-aguardiente',
    id: 'grappa-y-aguardiente',
    qty: 21,
  },
  {
    title: 'Calvados',
    img: zaglushka,
    alt: 'Imagen de calvados',
    href: '/calvados',
    id: 'calvados',
    qty: 88,
  },
  {
    title: 'Licores',
    img: zaglushka,
    alt: 'Imagen de licores',
    href: '/licores',
    id: 'licores',
    qty: 167,
  },
  {
    title: 'Pacharan',
    img: zaglushka,
    alt: 'Imagen de pacharan',
    href: '/pacharan',
    id: 'pacharan',
    qty: 299,
  },
  {
    title: 'Aperitivos',
    img: zaglushka,
    alt: 'Imagen de aperitivos',
    href: '/aperitivos',
    id: 'aperitivos',
    qty: 45,
  },
];
