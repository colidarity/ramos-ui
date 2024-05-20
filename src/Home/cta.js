import React from 'react';
import { BigH1, Button, ButtonGroup, CTAWrapper, RoundedIcon } from './styled';

import HeartBeatIco from '../../assets/images/heart-beat.png';
import GrowFasterIco from '../../assets/images/grow-faster.png';

const CTA = () => {
  return (
    <CTAWrapper>
      <BigH1>
        Maximize <span className="light">efficiency</span>
        <br /> with our intuitive
      </BigH1>

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

        <ButtonGroup>
          <Button bg="var(--btn-gray)" width="150px" color="var(--black)">
            Request a demo
          </Button>
          <Button bg="var(--orange)" width="150px" color="var(--white)">
            Start for free
          </Button>
        </ButtonGroup>
      </div>
    </CTAWrapper>
  );
};

export default CTA;
