import React from 'react';
import {
  Button,
  InsightsContent,
  InsightsFooter,
  InsightsTitle,
  InsightsWrapper,
  RoundedIcon,
  SalesStatisticCard,
  SettingUpReportCard,
} from './styled';
import LayerIco from '../../assets/images/layer-thick-light-ico.svg';
import LayerIcoYellow from '../../assets/images/layer-ico-yellow.png';
import PersonIco1 from '../../assets/images/person-ico-1.svg';
import PersonIco2 from '../../assets/images/person-ico-2.svg';

import UpArrowIco from '../../assets/images/up-arrow.svg';

const Insights = () => {
  return (
    <InsightsWrapper>
      <InsightsTitle>
        <div className="left">
          <h2>
            Your key to strategic
            <br />
            success through analytics
          </h2>
        </div>
        <div className="right">
          <p>
            Ready for exciting, instantaneous,
            <br /> all-accessible insights in real time?
          </p>
        </div>
      </InsightsTitle>

      <InsightsContent>
        <div className="left-card">
          <SettingUpReportCard>
            <Button bg="var(--yellow)" width="max-content" color="var(--black)">
              Setting up reports
            </Button>

            <h3>
              Fash and easy access
              <br />
              to analytics
            </h3>
            <p>
              One platform is a comprehensive system of solutions that will be
              the first step towards digitization of your business
            </p>
          </SettingUpReportCard>
          <SalesStatisticCard>
            <h4>Sales Statistic</h4>
            <div>
              <figure className="total-profit">
                <RoundedIcon
                  imagesize="20px"
                  size={'60px'}
                  bg={'var(--orange)'}
                >
                  <img src={LayerIco} />
                </RoundedIcon>
                <figcaption>
                  <span className="label">Total Profit</span>
                  <span className="amount">
                    <small>$</small> 264,2K
                  </span>
                </figcaption>
              </figure>

              <figure className="visitors">
                <figcaption>Visitors</figcaption>
                <span className="progress-bar"></span>
                <span className="counter">
                  56K
                  <sup>
                    <RoundedIcon
                      imagesize="10px"
                      size={'16px'}
                      bg={'var(--green)'}
                    >
                      <img src={UpArrowIco} />
                    </RoundedIcon>
                    &nbsp; +14%
                  </sup>
                </span>
              </figure>
            </div>
          </SalesStatisticCard>
        </div>
        <div className="right-card">
          <div>
            <figure className="layers">
              <img src={LayerIcoYellow} height={40} width={40} />

              <div className="profile-icons">
                <img src={PersonIco1} height={40} width={40} />
                <img src={PersonIco2} height={40} width={40} />
              </div>
            </figure>
            <figure className="transactions">
              <h5>Transactions</h5>
              <span>
                <RoundedIcon imagesize="15px" size={'20px'} bg={'var(--green)'}>
                  <img src={UpArrowIco} />
                </RoundedIcon>
                &nbsp;<sup>+14%</sup>
              </span>
              <figcaption>43K </figcaption>
            </figure>
          </div>
          <h3>Widget control</h3>
          <p>
            Reports provide a comprehensive overview
            <br />
            of important aspect of web analytics
          </p>
        </div>
      </InsightsContent>

      <InsightsFooter>
        <h2>
          <small>Up to</small> 45%
        </h2>
        Increase your analytics efficiency by upto 45%. Unique <br />
        algorithms provide insights from data, reduce time for analysis
        <br /> and save time for making important, informed decisions.
      </InsightsFooter>
    </InsightsWrapper>
  );
};

export default Insights;
