import React from 'react';

import { BigH1, Button, ButtonGroup, GetStartedWrapper } from './styled';

import LinkIco from '../../assets/images/link.png';

const GetStarted = () => {
  return (
    <GetStartedWrapper>
      <BigH1>
        We give you full
        <br /> <span className="light">control</span> over your data
      </BigH1>

      <div className="get-started-sec">
        <figure className="logo-ico">
          <img src={LinkIco} alt="logo" />
        </figure>
        <BigH1 textalign="center">Get Started</BigH1>
        <p>
          Turn information into advantage! Start using
          <br /> Ramos today. Sign up for a free trial
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
    </GetStartedWrapper>
  );
};
export default GetStarted;
