import React from 'react';

import Growth from '../../assets/images/conversion-rate.svg';
import Person1Ico from '../../assets/images/person-ico-1.svg';
import Person2Ico from '../../assets/images/person-ico-1.svg';

import {
  AnimatedBar,
  BigH1,
  CardFlex,
  ConversionRate,
  DataControl,
  FullControlWrapper,
  ImprovedCustomerService,
  Price,
  RoundedIcon,
  SalesRevenue,
} from './styled';

const FullControl = () => {
  return (
    <FullControlWrapper>
      <BigH1>
        We give you full
        <br /> <span className="light">control</span> over your data
      </BigH1>

      <DataControl className="data-control">
        <ImprovedCustomerService>
          <CardFlex>
            <ConversionRate>
              <h6 className="title">Conversion Rate</h6>
              <div className="conversion-rate">
                <RoundedIcon
                  imagesize="16px"
                  border="6px solid var(--btn-gray)"
                  size={'24px'}
                  bg={'var(--white)'}
                >
                  <img src={Growth} alt="growth" />
                </RoundedIcon>
                <h5 className="rate">
                  2,3<small>%</small>
                </h5>
              </div>
              <p>
                Percentage of
                <br />
                website visitors
              </p>
            </ConversionRate>
            <SalesRevenue>
              <h6 className="title">Sales Revenue</h6>

              <p className="revenue">
                <small>$</small>
                131,2K
              </p>
              <AnimatedBar />

              <Price>
                <div className="row">
                  <RoundedIcon imagesize="30px" size={'30px'}>
                    <img src={Person1Ico} alt="name of person" />
                  </RoundedIcon>{' '}
                  <p>Min. Price</p>
                  <span>1,200 $</span>
                </div>
                <div className="row">
                  <RoundedIcon imagesize="30px" size={'30px'}>
                    <img src={Person2Ico} alt="name of person" />
                  </RoundedIcon>{' '}
                  <p>Max. Price</p>
                  <span>2,320 $</span>
                </div>
                <div className="row">
                  <p>Engagement Rate</p>
                  <span>47.84%</span>
                </div>
              </Price>
            </SalesRevenue>
          </CardFlex>
          <h4>Improved customer service</h4>
          <p>
            Analytics helps optimize service processes by <br />
            providing information on how to improve interactions
            <br /> with customers and increase their satisfaction.
          </p>
        </ImprovedCustomerService>
        <div className="monitoring-key-indicators">
          <h4>Monitoring key indicators</h4>
          <p>
            Analytics platforms allow businessnes to track
            <br /> KPIs, an important tool for measuring success
            <br /> and achieving goals.
          </p>
        </div>
      </DataControl>
    </FullControlWrapper>
  );
};

export default FullControl;