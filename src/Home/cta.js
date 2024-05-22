import React, { useRef } from 'react';
import { BigH1, Button, ButtonGroup, CTAWrapper, RoundedIcon } from './styled';

import HeartBeatIco from '../../assets/images/heart-beat.png';
import GrowFasterIco from '../../assets/images/grow-faster.png';
import useInView from '../hooks/useInView';

const CTA = () => {
  const titleRef = useRef(null);
  const titleIconsRef = useRef(null);
  const footerRef = useRef(null);

  const titleVisible = useInView(titleRef);
  const titleIconsVisible = useInView(titleIconsRef);
  const footerVisible = useInView(footerRef);
  return (
    <CTAWrapper>
      <BigH1 ref={titleRef}>
        Maximize <span className="light">efficiency</span>
        <br /> with our intuitive
      </BigH1>

      <div className="badges" ref={titleIconsRef}>
        <div className="icons">
          <RoundedIcon
            className={
              titleIconsVisible
                ? 'animate__animated animate__zoomIn '
                : 'hidden'
            }
            imagesize="60px"
            size={'102px'}
            bg={'#f2f2f2'}
          >
            <img src={HeartBeatIco} />
          </RoundedIcon>
          <RoundedIcon
            className={
              titleIconsVisible
                ? 'animate__animated animate__zoomIn animate__faster'
                : 'hidden'
            }
            imagesize="60px"
            size={'102px'}
            bg={'var(--yellow)'}
          >
            <img src={GrowFasterIco} />
          </RoundedIcon>
        </div>
        <div
          className={`badge ${
            titleIconsVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
          }`}
        >
          <h2>
            <span>analytics services</span>
            <span>analytics services</span>
          </h2>
        </div>
      </div>

      <div className="cta" ref={footerRef}>
        <p
          className={
            footerVisible ? 'animate__animated animate__fadeInUp ' : 'hidden'
          }
        >
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight
          <br /> into your audience. With us, your business doesn't just adapt -
          it evolves
        </p>

        <ButtonGroup>
          <Button
            className={
              footerVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
            }
            bg="var(--btn-gray)"
            width="150px"
            color="var(--black)"
          >
            Request a demo
          </Button>
          <Button
            className={
              footerVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
            }
            bg="var(--orange)"
            width="150px"
            color="var(--white)"
          >
            Start for free
          </Button>
        </ButtonGroup>
      </div>
    </CTAWrapper>
  );
};

export default CTA;
