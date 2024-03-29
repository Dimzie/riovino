import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

export const LocationIcon = styled(IoLocationOutline)`
  width: 16px;
  height: 16px;
`;

export const PhoneIcon = styled(FiPhone)`
  width: 16px;
  height: 16px;
`;

export const BackIcon = styled(BiArrowBack)`
  width: 16px;
  height: 16px;
`;

export const TelegramIcon = styled(LiaTelegram)`
  width: 28px;
  height: 28px;
`;

export const InstagramIcon = styled(FaInstagram)`
  width: 28px;
  height: 28px;
`;

export const BurgerIcon = styled(RxHamburgerMenu)`
  width: 40px;
  height: 40px;
  color: #ffffff;
  transition: color 150ms ease-in;
`;
