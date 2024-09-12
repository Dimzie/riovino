import React from 'react';
import {
  FooterItem,
  FooterList,
  FooterSection,
  FooterSocialLink,
  FooterWarningText,
} from './Footer.styled';
import Container from 'components/GlobalContainer/GlobalContainer';
import { InstagramIcon, TelegramIcon } from 'helpers/icons/Icons.styled';



const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterList>
          <FooterItem>
            <FooterSocialLink href="#">
              <TelegramIcon />
            </FooterSocialLink>
          </FooterItem>
          <FooterItem>
            <FooterSocialLink href="#">
              <InstagramIcon />
            </FooterSocialLink>
          </FooterItem>
        </FooterList>
        <FooterWarningText>
          No está permitida bajo ningún concepto la venta de bebidas alcohólicas
          a menores de 18 años. Se recomienda moderación en su consumo.
        </FooterWarningText>
      </Container>
    </FooterSection>
  );
};

export default Footer;
