import React from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

import CTA from './cta';
import ATFContent from './atf';
import Insights from './insights';
import GetStarted from './get-started';

import { Container } from './styled';
import Footer from './footer';

const Home = () => {
  return (
    <Container>
      <PrimaryHeader />
      <ATFContent />
      <Insights />
      <CTA />
      <GetStarted />
      <Footer />
    </Container>
  );
};

export default Home;
