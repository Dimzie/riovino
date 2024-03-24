import { Section } from 'pages/Common.styled';
import React, { useState } from 'react';
import { Background, Btn, BtnWrapper } from './Authpage.styled';

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

      {activeBtn === 'in' ? <p>LOGIN FORM</p> : <p>REGISTER FORM</p>}
    </Section>
  );
};

export default Authpage;
