import { Section } from 'pages/Common.styled';
import React, { useState } from 'react';
import { Background, Btn, BtnWrapper } from './Authpage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import BackBtn from 'components/Buttons/BackBtn/BackBtn';
import { useLocation } from 'react-router-dom';

const Authpage = () => {
  const [activeBtn, setActiveBtn] = useState('in');
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  const handleClickSignIn = () => {
    setActiveBtn('in');
  };
  const handleClickSignUp = () => {
    setActiveBtn('up');
  };
  return (
    <Section>
      <BtnWrapper>
        <Background $activeBtn={activeBtn} />
        <Btn $activeBtn={activeBtn} onClick={handleClickSignIn}>
          Sign In
        </Btn>
        <Btn $activeBtn={activeBtn} onClick={handleClickSignUp}>
          Sign Up
        </Btn>
      </BtnWrapper>

      {activeBtn === 'in' ? <LoginForm /> : <RegisterForm />}
      <BackBtn backLink={backLink} />
    </Section>
  );
};

export default Authpage;
