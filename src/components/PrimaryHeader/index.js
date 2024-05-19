import React from 'react';
import { Button } from '../Controls';

import { Logo, Nav, StyledHeader } from './styled';

import LogoImage from '../../../assets/images/ramos-logo.png';

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
      <Button>Sign Up</Button>
    </StyledHeader>
  );
};

export default PrimaryHeader;
