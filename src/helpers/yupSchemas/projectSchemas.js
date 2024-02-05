import * as Yup from 'yup';

export const productSchema = Yup.object().shape({
  title: Yup.string().min(2).max(35).required('Requrired'),
  type: Yup.string()
    .oneOf(['Vinos', 'Destilados', 'Espumosos'])
    .required('Required'),
  subType: Yup.string().min(2).max(35).required('Required'),
  alcohol: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers')
    .required('Required'),
  price: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers')
    .required('Required'),
  capacity: Yup.string()
    .matches(/^[0-9]+$/, 'Only numbers')
    .required('Required'),
  region: Yup.string().min(2).max(35).required('Required'),
  image: Yup.mixed(),
});
