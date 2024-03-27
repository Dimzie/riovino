import { Section } from 'pages/Common.styled';
import React, { useState } from 'react';
import { Background, Btn, BtnWrapper } from './Authpage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Authpage = () => {
  const [activeBtn, setActiveBtn] = useState('in');

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
    </Section>
  );
};

export default Authpage;
