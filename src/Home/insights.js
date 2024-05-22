import React, { useRef } from 'react';
import CountUp from 'react-countup';
import {
  Button,
  InsightsContent,
  InsightsFooter,
  InsightsTitle,
  InsightsWrapper,
  RoundedIcon,
  SalesStatisticCard,
  SettingUpReportCard,
  VisitStatistic,
} from './styled';
import LayerIco from '../../assets/images/layer-thick-light-ico.svg';
import LayerIcoYellow from '../../assets/images/layer-ico-yellow.png';
import PersonIco1 from '../../assets/images/person-ico-1.svg';
import PersonIco2 from '../../assets/images/person-ico-2.svg';
import UpArrowIco from '../../assets/images/up-arrow.svg';
import RateStatisticIcon from '../../assets/images/hex.png';

import useInView from '../hooks/useInView';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
} from 'recharts';

const dataLine = [
  {
    amt: 800,
    month: 'Jan',
  },
  {
    amt: 1200,
    month: 'Feb',
  },
  {
    amt: 1000,
    month: 'Mar',
  },
  {
    amt: 1500,
    month: 'Apr',
  },
  {
    amt: 1200,
    month: 'May',
  },
  {
    amt: 1800,
  },
  {
    amt: 2000,
  },
  {
    amt: 2500,
  },
];

const Insights = () => {
  const insightsRef = useRef(null);
  const counterRef = useRef(null);
  const footerRef = useRef(null);

  const insightsVisible = useInView(insightsRef);
  const counterVisible = useInView(counterRef);
  const footerVisible = useInView(footerRef);

  return (
    <InsightsWrapper ref={insightsRef}>
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
            <Button
              className={
                counterVisible ? 'animate__animated animate__zoomIn ' : 'hidden'
              }
              bg="var(--yellow)"
              width="max-content"
              color="var(--black)"
            >
              Setting up reports
            </Button>

            <h3
              className={
                counterVisible
                  ? 'animate__animated animate__fadeInUp'
                  : 'hidden'
              }
            >
              Fash and easy access
              <br />
              to analytics
            </h3>
            <p
              className={
                counterVisible
                  ? 'animate__animated animate__fadeInUp'
                  : 'hidden'
              }
            >
              One platform is a comprehensive system of solutions that will be
              the first step towards digitization of your business
            </p>
          </SettingUpReportCard>
          <SalesStatisticCard>
            <h4>Sales Statistic</h4>
            <div
              className={
                insightsVisible
                  ? 'animate__animated animate__fadeInUp'
                  : 'hidden'
              }
            >
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
                  <span className="amount" ref={counterRef}>
                    <small>$</small>
                    {counterVisible ? (
                      <CountUp start={0} end={2642} delay={0}>
                        {({ countUpRef }) => (
                          <div>
                            <span ref={countUpRef} />
                          </div>
                        )}
                      </CountUp>
                    ) : (
                      '264,2'
                    )}
                    K
                  </span>
                </figcaption>
              </figure>

              <figure className="visitors">
                <figcaption>Visitors</figcaption>
                <span
                  className={`progress-bar ${counterVisible ? 'animated' : ''}`}
                ></span>
                <span className="counter">
                  {counterVisible ? (
                    <CountUp start={0} end={56} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  ) : (
                    '56K'
                  )}
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

            <VisitStatistic>
              <h6>Visit statistics</h6>
              {counterVisible ? (
                <>
                  <ResponsiveContainer width={235} height={130}>
                    <LineChart
                      width={500}
                      height={100}
                      data={dataLine}
                      margin={{ top: 0, right: 0, left: 8, bottom: 0 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#efefef" />
                      <XAxis
                        tick={{
                          stroke: 'var(--light-gray)',
                          fontSize: '10px',
                        }}
                        stroke="var(--white)"
                        color="#eee"
                        dataKey="month"
                      />
                      <Line dataKey="amt" stroke="#FFC606" fill="#FFF" />
                    </LineChart>
                  </ResponsiveContainer>

                  <div className="statistic-board">
                    <div className="top">
                      <span>Rate</span>
                      <img src={RateStatisticIcon} alt="rate-statistic-icon" />
                    </div>
                    <div className="bottom">
                      <span className="plus">&#43;</span>
                      <span className="percent">58&#37;</span>
                    </div>
                  </div>
                </>
              ) : (
                ''
              )}
            </VisitStatistic>
          </SalesStatisticCard>
        </div>
        <div className="right-card">
          <div>
            <figure
              className={`layers ${insightsVisible ? 'fade-in-side' : 'hidden'}`}
            >
              <img
                className={
                  insightsVisible
                    ? 'animate__animated animate__bounceIn'
                    : 'hidden'
                }
                src={LayerIcoYellow}
                height={40}
                width={40}
              />

              <div className="profile-icons">
                <img src={PersonIco1} height={40} width={40} />
                <img src={PersonIco2} height={40} width={40} />
              </div>
            </figure>
            <figure
              className={`transactions ${insightsVisible ? 'fade-in-side' : 'hidden '}`}
            >
              <h5>Transactions</h5>
              <span className="figure">
                <RoundedIcon imagesize="15px" size={'20px'} bg={'var(--green)'}>
                  <img src={UpArrowIco} />
                </RoundedIcon>
                &nbsp;<sup>+14%</sup>
              </span>
              <figcaption>
                {counterVisible ? (
                  <CountUp start={0} end={43} delay={0}>
                    {({ countUpRef }) => <span ref={countUpRef}></span>}
                  </CountUp>
                ) : (
                  <>43</>
                )}
                K
              </figcaption>
            </figure>
          </div>
          <h3
            className={
              counterVisible ? 'animate__animated animate__fadeInUp' : 'hidden'
            }
          >
            Widget control
          </h3>
          <p
            className={
              counterVisible ? 'animate__animated animate__fadeInUp' : 'hidden'
            }
          >
            Reports provide a comprehensive overview
            <br />
            of important aspect of web analytics
          </p>
        </div>
      </InsightsContent>

      <InsightsFooter ref={footerRef}>
        <h2>
          <small>Up to</small> 45%
        </h2>
        <p
          className={
            footerVisible ? 'animate__animated animate__fadeInUp' : 'hidden'
          }
        >
          Increase your analytics efficiency by upto 45%. Unique <br />
          algorithms provide insights from data, reduce time for analysis
          <br /> and save time for making important, informed decisions.
        </p>
      </InsightsFooter>
    </InsightsWrapper>
  );
};

export default Insights;
