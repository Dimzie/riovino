import styled from 'styled-components';
import { IoLocationOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { LiaTelegram } from 'react-icons/lia';
import { FaInstagram } from 'react-icons/fa';
import { BiArrowBack } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrUpdate } from 'react-icons/gr';
import { IoAddSharp } from 'react-icons/io5';
import { BsCart4 } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';

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

export const CloseIcon = styled(GrClose)`
  width: 26px;
  height: 26px;
`;

export const TrashIcon = styled(AiOutlineDelete)`
  width: 22px;
  height: 22px;
`;

export const UpdateIcon = styled(GrUpdate)`
  width: 16px;
  height: 16px;
`;

export const AddIcon = styled(IoAddSharp)`
  width: 28px;
  height: 28px;
`;

export const AddBtnIcon = styled(BsCart4)`
  width: 24px;
  height: 24px;
`;

export const LogOutIcon = styled(GrLogout)`
  width: 20px;
  height: 20px;
`;
