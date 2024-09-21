import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  name: Yup.string()
    .min(2, 'At least 2 characters long')
    .max(10, 'At most 10 characters long')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters long')
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,
      'You can only use Latin letters, numbers and symbols!'
    )
    .required('Required'),
  repeatPassword: Yup.string()
    .min(6, 'Minimum 6 characters long')
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    .required('Required'),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters long')
    .matches(
      /^[A-Za-z0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/`"'-=|]*$/,
      'You can only use Latin letters, numbers and symbols!'
    )
    .required('Required'),
});

export const ProductSchema = Yup.object().shape({
  title: Yup.string().min(2, "Mínimo 2 caracteres").required('Obligatorio'),
  type: Yup.string()
    .oneOf(['vinos', 'destilados', 'espumosos'], 'Tipo no válido')
    .required('Obligatorio'),
  subType: Yup.string().required('Obligatorio'),
  critics: Yup.array(),
  critic: Yup.string(),
  criticRate: Yup.number()
    .min(0, 'Minimum es 0')
    .max(100, 'Maximum es 100')
    .integer('Sólo se permiten números enteros!'),
  alcohol: Yup.string()
    .matches(/^[0-9.,]+$/, 'Solo numeros, comas y puntos')
    .required('Obligatorio'),
  capacity: Yup.string()
    .matches(/^[0-9.,]+$/, 'Solo numeros, comas y puntos')
    .required('Obligatorio'),
  price: Yup.string()
    .matches(/^[0-9.,]+(?:\.\d{1,2})?$/, 'Solo numeros, comas y puntos')
    .required('Obligatorio'),
  region: Yup.string().min(2).max(35).required('Obligatorio'),
  discount: Yup.string().matches(/^[0-9.,]+$/, 'Solo numeros, comas y puntos'),
  year: Yup.string().matches(/^[0-9]+$/, 'Solo numeros'),
  // image: Yup.mixed(),
});
