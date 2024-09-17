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
  title: Yup.string().required('Required'),
  type: Yup.string()
    .oneOf(['vinos', 'destilados', 'espumosos'], 'Wrong type')
    .required('Required'),
  subType: Yup.string().required('Required'),
  critics: Yup.array(),
  critic: Yup.string(),
  criticRate: Yup.number()
    .min(0, 'Minimum is 0')
    .max(100, 'Maximum is 100')
    .integer('Only integers are allowed'),
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
  discount: Yup.string().matches(/^[0-9]+$/, 'Only numbers'),
  // image: Yup.mixed(),
});
