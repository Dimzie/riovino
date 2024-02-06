import * as Yup from 'yup';

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required('Requrired'),
  type: Yup.string()
    .oneOf(['vinos', 'destilados', 'espumosos'], 'Wrong type')
    .required('Required'),
  subType: Yup.string()
    .oneOf(
      [
        'tinto',
        'blanco',
        'rosado',
        'generoso',
        'dulce',
        'aranja',
        'vermut',
        'champagne',
        'cava',
        'corpinnat',
        'prosecco',
        'otrosEspumosos',
        'ron',
        'ginebra',
        'whisky',
        'vodka',
        'cognac',
        'brandy',
        'pastis',
        'tequilaYMezcal',
        'grappaYAguardiente',
        'calvados',
        'licores',
        'pacharan',
        'aperitivos',
      ],
      'Wrong subType'
    )
    .required('Required'),
  alcohol: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers')
    .required('Required'),
  capacity: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers')
    .required('Required'),
  price: Yup.string()
    .matches(/^[0-9]+(?:\.\d{1,2})?$/, 'Invalid price')
    .required('Required'),
  region: Yup.string().min(2).max(35).required('Required'),
  // image: Yup.mixed(),
});
