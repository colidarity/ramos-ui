import React from 'react';

import { Logo, Nav, StyledHeader } from './styled';

import LogoImage from '../../../assets/images/ramos-logo.png';
import { Button } from '../../Home/styled';

const NavItems = [
  { link: '#', title: 'Dashboard' },
  { link: '#', title: 'Reports' },
  { link: '#', title: 'Documents' },
  { link: '#', title: 'History' },
  { link: '#', title: 'Settings' },
];

const PrimaryHeader = () => {
  return (
    <StyledHeader className="flex justify-space-between align-center">
      <Logo href="#">
        <img src={LogoImage} width="100" />
      </Logo>
      <Nav>
        <ul>
          {NavItems.map(({ link, title }) => (
            <li key={title}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </Nav>
      <Button bg="var(--btn-gray)" color="var(--black)">
        Sign Up
      </Button>
    </StyledHeader>
  );
};

export default PrimaryHeader;
