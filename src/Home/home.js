import React from 'react';

import ATFContent from './atf';
import PrimaryHeader from '../components/PrimaryHeader';

import { Container } from './styled';

const Home = () => {
  return (
    <Container>
      <PrimaryHeader />
      <ATFContent />
    </Container>
  );
};

export default Home;
