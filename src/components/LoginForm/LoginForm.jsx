import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { ErrorMessage, Field, Formik } from 'formik';
import { LoginSchema } from 'helpers/yupSchemas/projectSchemas';
import { Label, StyledForm } from 'components/RegisterForm/RegisterForm.styled';

const RegisterForm = () => {
  //   const [passVisible, setPassVisible] = useState(false);
  const dispatch = useDispatch();

  //   const handlePassVisible = () => {
  //     setPassVisible(!passVisible);
  //   };

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, actions) => {
    const { repeatePassword, ...restValues } = values;
    dispatch(login(restValues));
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
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
              <button type="submit">Login</button>
            </StyledForm>
          );
        }}
      </Formik>
    </>
  );
};

export default RegisterForm;
