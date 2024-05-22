import React, { useEffect, useRef, useState } from 'react';

import ATFImage from '../../assets/images/atf-image.png';
import PlayIco from '../../assets/images/play-light-ico.svg';
import BoltIco from '../../assets/images/flash-orange-ico.svg';
import LineChartIco from '../../assets/images/chart-light-ico.svg';

import {
  ATFImageStyled,
  ATFVideo,
  ATFHead,
  ContentSection,
  PlayBtn,
  ATFIconGroup,
  RoundedIcon,
  ThirdIco,
} from './styled';

import AnimatedLinesIco from '../components/AnimatedLinesIco';
import useInView from '../hooks/useInView';
import TextSplitter from '../components/TextSplitter';

const ATFContent = () => {
  const headingRef = useRef(null);
  const isVisible = useInView(headingRef);
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setShowIcons(true);
      }, 1000);
    } else {
      setShowIcons(false);
    }
  }, [isVisible]);

  return (
    <ContentSection>
      <ATFIconGroup>
        <RoundedIcon
          className={`${
            showIcons
              ? 'fade-in animate__animated  animate__rotateIn animate__rotateIn'
              : 'hidden'
          }`}
          imagesize={'40px'}
          size={'102px'}
          bg={'var(--btn-gray)'}
        >
          <img src={BoltIco} />
        </RoundedIcon>
        <RoundedIcon
          className={`${
            showIcons
              ? 'fade-in animate__animated  animate__rotateIn animate__rotateIn'
              : 'hidden'
          }`}
          imagesize={'40px'}
          size={'102px'}
          bg={'var(--orange)'}
        >
          <img src={LineChartIco} />
        </RoundedIcon>
      </ATFIconGroup>

      <ATFHead ref={headingRef} className={isVisible ? 'animate-heading' : ''}>
        <span className="block">
          <TextSplitter text={'Analytics'} />
        </span>
        <span className="block">
          <TextSplitter text={'that'} />
          &nbsp;
          <span className="light">
            <TextSplitter text={'help'} />
            &nbsp;
          </span>
          <TextSplitter text={'you'} /> &nbsp;
        </span>
        <span className="block">
          <TextSplitter text={'shape'} /> &nbsp;<span className="space"></span>
          <TextSplitter text={'the'} />
          &nbsp;
          <TextSplitter text={'future'} />
        </span>
      </ATFHead>

      <ThirdIco
        className={
          showIcons ? 'fade-in animate__animated  animate__zoomIn' : 'hidden'
        }
        imagesize={'40px'}
        size={'102px'}
        bg={'var(--yellow)'}
      >
        <AnimatedLinesIco />
      </ThirdIco>
      <ATFVideo>
        <PlayBtn
          className={
            showIcons ? 'fade-in animate__animated  animate__zoomIn' : 'hidden'
          }
        >
          <img src={PlayIco} width={30} height={30} />
        </PlayBtn>
        <ATFImageStyled
          className={
            showIcons ? 'fade-in animate__animated  animate__zoomIn' : 'hidden'
          }
          width={400}
          height={250}
          src={ATFImage}
        />{' '}
        <br />
      </ATFVideo>
    </ContentSection>
  );
};

export default ATFContent;
