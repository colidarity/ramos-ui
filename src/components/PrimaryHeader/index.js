import React, { useRef } from 'react';
import 'animate.css';

import { Logo, Nav, StyledHeader } from './styled';

import LogoImage from '../../../assets/images/ramos-logo.png';
import { Button } from '../../Home/styled';
import useInView from '../../hooks/useInView';

const NavItems = [
  { link: '#', title: 'Dashboard' },
  { link: '#', title: 'Reports' },
  { link: '#', title: 'Documents' },
  { link: '#', title: 'History' },
  { link: '#', title: 'Settings' },
];

const PrimaryHeader = () => {
  const headerRef = useRef(null);
  const isVisible = useInView(headerRef);
  console.log(isVisible);

  return (
    <StyledHeader
      ref={headerRef}
      className={`flex justify-space-between align-center ${isVisible ? 'animate__animated animate__slideInUp' : ''}`}
    >
      <Logo
        href="#"
        className={`${isVisible ? 'animate__animated animate__slideInUp' : ''}`}
      >
        <img src={LogoImage} width="100" />
      </Logo>
      <Nav className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
        <ul>
          {NavItems.map(({ link, title }) => (
            <li key={title}>
              <a href={link}>{title}</a>
            </li>
          ))}
        </ul>
      </Nav>
      <Button
        className={isVisible ? 'animate__animated animate__slideInUp' : ''}
        bg="var(--btn-gray)"
        color="var(--black)"
      >
        Sign Up
      </Button>
    </StyledHeader>
  );
};

export default PrimaryHeader;
