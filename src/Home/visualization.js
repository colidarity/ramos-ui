import React, { useRef } from 'react';
import { RoundedIcon, VisualizationWrapper } from './styled';

import PlusIco from '../../assets/images/plus_icon.svg';
import Ipad from '../../assets/images/ipad.png';
import IPhone from '../../assets/images/iphone.png';
import TextSplitter from '../components/TextSplitter';
import useInView from '../hooks/useInView';

const Visualization = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const accordionRef = useRef(null);

  const titleVisible = useInView(titleRef, { threshold: '0.5' });
  const headingVisible = useInView(headingRef);
  const accordionVisible = useInView(accordionRef);

  return (
    <VisualizationWrapper>
      <div className="info ">
        <div className="half-width">
          <h3
            className={
              headingVisible ? 'animate__animated animate__fadeInUp' : ''
            }
            ref={headingRef}
          >
            Turning data into real
            <br />
            actions and ideas.
          </h3>
          <ul
            ref={accordionRef}
            className={`accordion ${accordionVisible ? 'animate__animated animate__fadeInUp' : 'hidden'}`}
          >
            <li>
              <span>Instant Insights</span>
              <RoundedIcon imagesize="12px" size="30px" bg="var(--light-gray)">
                <img src={PlusIco} alt="Expand" />
              </RoundedIcon>
            </li>
            <li>
              <span>AI technology</span>{' '}
              <RoundedIcon imagesize="12px" size="30px" bg="var(--light-gray)">
                <img src={PlusIco} alt="Expand" />
              </RoundedIcon>
            </li>
            <li>
              <span>Easy integration</span>{' '}
              <RoundedIcon imagesize="12px" size="30px" bg="var(--light-gray)">
                <img src={PlusIco} alt="Expand" />
              </RoundedIcon>
            </li>
          </ul>
        </div>
        <div className="devices half-width">
          <div className="ipad">
            <img src={Ipad} alt={'data in ipad'} />
          </div>
          <div
            className={`iphone ${headingVisible ? 'animate__animated animate__fadeInUp' : ''}`}
          >
            <img src={IPhone} alt={'data in iphone'} />
          </div>
        </div>
      </div>
      <h1
        ref={titleRef}
        className={`ramos-big-text ${titleVisible ? 'animate-heading' : ''}`}
      >
        <span>Ramos</span>
      </h1>
    </VisualizationWrapper>
  );
};

export default Visualization;
