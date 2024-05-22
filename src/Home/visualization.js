import React, { useRef } from 'react';
import { RoundedIcon, VisualizationWrapper } from './styled';

import PlusIco from '../../assets/images/plus_icon.svg';
import IpadContent1 from '../../assets/images/ipad-content-1.png';
import IpadContent2 from '../../assets/images/ipad-content-2.png';
import IPhoneContent1 from '../../assets/images/iphone-content-1.png';
import IPhoneContent2 from '../../assets/images/iphone-content-2.png';

import useInView from '../hooks/useInView';
import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const IPhoneData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

const IPadData = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
  { name: 'Aug', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Sep', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
];

const Visualization = () => {
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const accordionRef = useRef(null);
  const chartRef = useRef(null);

  const titleVisible = useInView(titleRef, { threshold: '0.5' });
  const headingVisible = useInView(headingRef);
  const accordionVisible = useInView(accordionRef);
  const chartVisible = useInView(chartRef);

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
        <div className="devices  half-width">
          <div className="ipad">
            <img className="header" src={IpadContent1} alt={'header in ipad'} />
            {chartVisible ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={IPadData} barCategoryGap="0%">
                  <Bar
                    dataKey="pv"
                    stackId="a"
                    fill="#FE4A23"
                    radius={[10, 10, 0, 0]}
                  />
                  <Bar
                    dataKey="uv"
                    stackId="a"
                    fill="#F2F2F2"
                    isAnimationActive={true}
                    animationBegin={1000}
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              ''
            )}
            <img
              className="content"
              src={IpadContent2}
              alt={'content in ipad'}
            />
          </div>
          <div className={`iphone `}>
            <img
              className="header"
              src={IPhoneContent1}
              alt={'header in iphone'}
            />
            {chartVisible ? (
              <ResponsiveContainer width="100%" height={160}>
                <BarChart data={IPhoneData} barCategoryGap="0%">
                  <Bar
                    dataKey="pv"
                    stackId="a"
                    fill="#FE4A23"
                    radius={[10, 10, 0, 0]}
                  />
                  <Bar
                    dataKey="uv"
                    stackId="a"
                    fill="#F2F2F2"
                    isAnimationActive={true}
                    animationBegin={1000}
                    animationDuration={1500}
                    animationEasing="ease-in-out"
                    radius={[10, 10, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              ''
            )}
            <img
              ref={chartRef}
              className={` content ${headingVisible ? 'animate__animated animate__fadeInUp' : ''}`}
              src={IPhoneContent2}
              alt={'content in iphone'}
            />
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
