import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { ErrorMessage, Field, Formik } from 'formik';
import { RegisterSchema } from 'helpers/yupSchemas/projectSchemas';
import { Label, StyledForm } from './RegisterForm.styled';

const RegisterForm = () => {
  //   const [passVisible, setPassVisible] = useState(false);
  //   const [repeatePassVisible, setRepeatePassVisible] = useState(false);
  const dispatch = useDispatch();

  //   const handlePassVisible = () => {
  //     setPassVisible(!passVisible);
  //   };
  //   const handleRepeatPassVisible = () => {
  //     setRepeatePassVisible(!repeatePassVisible);
  //   };

  const initialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const handleSubmit = async (values, actions) => {
    const { repeatePassword, ...restValues } = values;
    dispatch(register(restValues));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        {props => {
          const isValid = field =>
            props.touched[field] && props.errors[field] ? 'invalid' : 'valid';

          return (
            <StyledForm autoComplete="on">
              <Label>
                Email
                <Field type="text" name="email" isvalid={isValid('email')} />
                <ErrorMessage name="email" />
              </Label>
              <Label>
                Password
                <Field
                  type="password"
                  name="password"
                  autoComplete="off"
                  isvalid={isValid('password')}
                />
                <ErrorMessage name="password" />
              </Label>
              <Label>
                Repeat password
                <Field
                  type="password"
                  name="repeatPassword"
                  autoComplete="off"
                  isvalid={isValid('repeatPassword')}
                />
                <ErrorMessage name="repeatPassword" />
              </Label>
              <button type="submit">Register</button>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
