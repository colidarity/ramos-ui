import React, { lazy } from 'react';

import PrimaryHeader from '../components/PrimaryHeader';

import { Container } from './styled';
import Visualization from './visualization';

const CTA = lazy(() => import('./cta'));
const ATFContent = lazy(() => import('./atf'));
const Insights = lazy(() => import('./insights'));
const GetStarted = lazy(() => import('./get-started'));
const Footer = lazy(() => import('./footer'));
const FullControl = lazy(() => import('./full-control'));

const Home = () => {
  return (
    <Container>
      <PrimaryHeader />
      <ATFContent />
      <Insights />
      <CTA />
      <Visualization />
      <FullControl />
      <GetStarted />
      <Footer />
    </Container>
  );
};

export default Home;
