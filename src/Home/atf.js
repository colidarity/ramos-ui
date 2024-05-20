import React from 'react';

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

const ATFContent = () => {
  return (
    <ContentSection>
      <ATFIconGroup>
        <RoundedIcon imagesize={'40px'} size={'102px'} bg={'var(--btn-gray)'}>
          <img src={BoltIco} />
        </RoundedIcon>
        <RoundedIcon imagesize={'40px'} size={'102px'} bg={'var(--orange)'}>
          <img src={LineChartIco} />
        </RoundedIcon>
      </ATFIconGroup>
      <ATFHead>
        <span className="block">Analytics</span>
        <span className="block">
          that <span className="light">help</span> you &nbsp;
        </span>
        <span className="block">
          shape <span className="space"></span> the future
        </span>
      </ATFHead>

      <ThirdIco imagesize={'40px'} size={'102px'} bg={'var(--yellow)'}>
        <AnimatedLinesIco />
      </ThirdIco>
      <ATFVideo>
        <PlayBtn>
          <img src={PlayIco} width={30} height={30} />
        </PlayBtn>
        <ATFImageStyled width={400} height={250} src={ATFImage} /> <br />
      </ATFVideo>
    </ContentSection>
  );
};

export default ATFContent;
