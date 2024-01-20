import styled from 'styled-components';

export const FooterSection = styled.footer`
  background-color: rgba(1, 1, 1, 0.5);
  padding: 15px 0px;
`;

export const FooterList = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

export const FooterItem = styled.li``;

export const FooterSocialLink = styled.a`
  position: relative;
  transition: color 100ms ease-in;

  &:hover,
  &:focus {
    color: #c0aa41;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #c0aa41;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0.25, 1, 0.5, 1);
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

export const FooterWarningText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
`;
