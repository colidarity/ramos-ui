import React, { useRef } from 'react';

import { BigH1, Button, ButtonGroup, GetStartedWrapper } from './styled';

import LinkIco from '../../assets/images/link.png';
import useInView from '../hooks/useInView';
import TextSplitter from '../components/TextSplitter';

const GetStarted = () => {
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const buttonsRef = useRef(null);

  const iconVisible = useInView(iconRef);
  const titleVisible = useInView(titleRef);
  const buttonsVisible = useInView(buttonsRef);
  return (
    <GetStartedWrapper>
      <div className="get-started-sec">
        <figure
          ref={iconRef}
          className={`logo-ico ${iconVisible ? 'animate__animated animate__zoomOut animate__slideInDown' : ''}`}
        >
          <img src={LinkIco} alt="logo" />
        </figure>
        <BigH1
          className={titleVisible ? 'animate-heading' : ''}
          ref={titleRef}
          textalign="center"
        >
          <span className="block">
            <TextSplitter text={'Get Started'} />
          </span>
        </BigH1>
        <p
          className={
            buttonsVisible ? 'animate__animated animate__fadeInUp ' : 'hidden'
          }
        >
          Turn information into advantage! Start using
          <br /> Ramos today. Sign up for a free trial
        </p>
        <ButtonGroup ref={buttonsRef}>
          <Button
            className={
              buttonsVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
            }
            bg="var(--btn-gray)"
            width="150px"
            color="var(--black)"
          >
            Request a demo
          </Button>
          <Button
            className={
              buttonsVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
            }
            bg="var(--orange)"
            width="150px"
            color="var(--white)"
          >
            Start for free
          </Button>
        </ButtonGroup>
      </div>
    </GetStartedWrapper>
  );
};
export default GetStarted;
