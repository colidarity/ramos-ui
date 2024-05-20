import React from 'react';
import { Button, CTAWrapper, RoundedIcon } from './styled';

import HeartBeatIco from '../../assets/images/heart-beat.png';
import GrowFasterIco from '../../assets/images/grow-faster.png';

const CTA = () => {
  return (
    <CTAWrapper>
      <h1>
        Maximize <span className="light">efficiency</span>
        <br /> with our intuitive
      </h1>

      <div className="badges">
        <div className="icons">
          <RoundedIcon imagesize="60px" size={'102px'} bg={'#f2f2f2'}>
            <img src={HeartBeatIco} />
          </RoundedIcon>
          <RoundedIcon imagesize="60px" size={'102px'} bg={'var(--yellow)'}>
            <img src={GrowFasterIco} />
          </RoundedIcon>
        </div>
        <div className="badge">
          <h2>
            <span>analytics services</span>
            <span>analytics services</span>
          </h2>
        </div>
      </div>

      <div className="cta">
        <p>
          Explore traffic sources, page behaviour, conversions and more to gain
          deep insight
          <br /> into your audience. With us, your business doesn't just adapt -
          it evolves
        </p>

        <div className="btn-group">
          <Button bg="var(--btn-gray)" width="max-content" color="var(--black)">
            Request a demo
          </Button>
          <Button bg="var(--orange)" width="max-content" color="var(--white)">
            Start for free
          </Button>
        </div>
      </div>
    </CTAWrapper>
  );
};

export default CTA;
