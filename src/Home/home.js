import React from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

import CTA from './cta';
import ATFContent from './atf';
import Insights from './insights';
import GetStarted from './get-started';

import { Container } from './styled';
import Footer from './footer';
import FullControl from './full-control';

const Home = () => {
  return (
    <Container>
      <PrimaryHeader />
      <ATFContent />
      <Insights />
      <CTA />
      <FullControl />
      <GetStarted />
      <Footer />
    </Container>
  );
};

export default Home;
