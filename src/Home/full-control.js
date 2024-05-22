import React, { useRef } from 'react';
import CountUp from 'react-countup';

import Growth from '../../assets/images/conversion-rate.svg';
import Person1Ico from '../../assets/images/person-ico-1.svg';
import Person2Ico from '../../assets/images/person-ico-1.svg';
import LinkIco from '../../assets/images/link-ico.png';
import InsightsIco from '../../assets/images/insights.png';

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
} from 'recharts';

import {
  AnimatedBar,
  BigH1,
  Button,
  CardFlex,
  ConversionRate,
  DataControl,
  DataVisualization,
  FullControlWrapper,
  ImprovedCustomerService,
  InsightsData,
  MonitoringKeyIndicators,
  Price,
  RoundedIcon,
  SalesRevenue,
} from './styled';
import useInView from '../hooks/useInView';
import TextSplitter from '../components/TextSplitter';

const FullControl = () => {
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const dataControlRef = useRef(null);
  const chartRef = useRef(chartVisible);

  const titleVisible = useInView(titleRef);
  const counterVisible = useInView(counterRef);
  const dataControlVisible = useInView(dataControlRef);
  const chartVisible = useInView(chartRef);

  const data = [
    { year: '2021', profit: 3000, fill: '#F2F2F2' },
    { year: '2020', profit: 1000, fill: '#F2F2F2' },
    { year: '2019', profit: 3000, fill: '#F2F2F2' },
    { year: '2018', profit: 5000, fill: '#FFD027' },
    { year: '2017', profit: 2000, fill: '#F2F2F2' },
  ];
  const dataLine = [
    {
      amt: 800,
    },
    {
      amt: 1200,
    },
    {
      amt: 1000,
    },
    {
      amt: 1500,
    },
    {
      amt: 1200,
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

  return (
    <FullControlWrapper>
      <BigH1 className={titleVisible ? 'animate-heading' : ''} ref={titleRef}>
        <span className="block">
          <TextSplitter text={'We give you full'} />{' '}
        </span>{' '}
        <span className="block">
          <span className="light">
            <TextSplitter text={'control'} />{' '}
          </span>{' '}
          <TextSplitter text={'over your data'} />
        </span>
      </BigH1>

      <DataControl ref={dataControlRef} className="data-control">
        <ImprovedCustomerService>
          <CardFlex>
            <ConversionRate>
              <h6 className="title">Conversion Rate</h6>
              <div ref={counterRef} className="conversion-rate">
                <RoundedIcon
                  imagesize="16px"
                  border="6px solid var(--btn-gray)"
                  size={'24px'}
                  bg={'var(--white)'}
                >
                  <img src={Growth} alt="growth" />
                </RoundedIcon>
                <h5 className="rate">
                  {counterVisible ? (
                    <CountUp start={0} end={23} delay={0}>
                      {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                  ) : (
                    '23'
                  )}
                  <small>%</small>
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
                {counterVisible ? (
                  <CountUp start={0} end={1312} delay={0}>
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                ) : (
                  '131,2'
                )}
                K
              </p>
              <AnimatedBar className={counterVisible ? 'animate' : ''} />

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
        <MonitoringKeyIndicators
          className={
            dataControlVisible ? 'animate__animated animate__fadeIn ' : 'hidden'
          }
        >
          <DataVisualization>
            <div
              className={`card-bg ${
                dataControlVisible
                  ? 'animate__animated animate__bounceIn'
                  : 'hidden'
              }`}
            >
              <h5>
                <RoundedIcon
                  borderradius={'6px'}
                  imagesize="14px"
                  size={'22px'}
                  bg={'#f2f2f2'}
                >
                  <img src={LinkIco} alt="reports icon" />
                </RoundedIcon>
                Finance Reports
              </h5>
            </div>

            <div className={`insights `}>
              <div className="left">
                <InsightsData>
                  <div className="insightdata-container">
                    <div className="left">
                      <h5>
                        <RoundedIcon
                          borderradius={'6px'}
                          imagesize="14px"
                          size={'22px'}
                          bg={'#f2f2f2'}
                        >
                          <img src={InsightsIco} alt="insights icon" />
                        </RoundedIcon>
                        Insights
                      </h5>
                      <span>Total Profit</span>
                      <br />
                      <p class="revenue">
                        <small>$</small>
                        <span>1,312</span>K
                      </p>
                      <br />
                      <Button className="">Data Visualization</Button>
                    </div>
                    <div className="right" ref={chartRef}>
                      {chartVisible ? (
                        <ResponsiveContainer width="100%" height={110}>
                          <AreaChart
                            width={500}
                            height={100}
                            data={dataLine}
                            margin={{
                              top: 0,
                              right: 30,
                              left: 20,
                              bottom: 0,
                            }}
                          >
                            <Area
                              type="monotone"
                              dataKey="amt"
                              stroke="#FFC606"
                              fill="#FFF"
                              isAnimationActive={true}
                              animationBegin={1000}
                              animationDuration={2000}
                            />
                          </AreaChart>
                          <BarChart
                            data={data}
                            margin={{
                              top: 0,
                              right: 30,
                              left: 20,
                              bottom: 10,
                            }}
                          >
                            <XAxis
                              tick={{
                                stroke: 'var(--light-gray)',
                                fontSize: '12px',
                              }}
                              stroke="var(--white)"
                              dataKey="year"
                              color="#eee"
                            />

                            <Bar
                              dataKey="profit"
                              fill="fill"
                              isAnimationActive={true}
                              animationBegin={250}
                              animationDuration={1000}
                              animationEasing="ease-in-out"
                              radius={6}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        ''
                      )}
                    </div>
                  </div>
                </InsightsData>
              </div>
            </div>
          </DataVisualization>
          <h4>Monitoring key indicators</h4>
          <p>
            Analytics platforms allow businessnes to track
            <br /> KPIs, an important tool for measuring success
            <br /> and achieving goals.
          </p>
        </MonitoringKeyIndicators>
      </DataControl>
    </FullControlWrapper>
  );
};

export default FullControl;
