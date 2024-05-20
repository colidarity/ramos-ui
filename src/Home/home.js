import React from 'react';

import PrimaryHeader from '../components/PrimaryHeader';
import ATFContent from './atf';
import Insights from './insights';
import CTA from './cta';

import { Container } from './styled';

const Home = () => {
  return (
    <Container>
      <PrimaryHeader />
      <ATFContent />
      <Insights />
      <CTA />
    </Container>
  );
};

export default Home;
