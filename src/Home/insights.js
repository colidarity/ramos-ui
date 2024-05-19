import React from 'react';
import { InsightsFooter, InsightsTitle, InsightsWrapper } from './styled';

const Insights = () => {
  return (
    <InsightsWrapper>
      <InsightsTitle>
        <div>
          <h2>
            Your key to strategic
            <br />
            success through analytics
          </h2>
        </div>
        <div>
          <p>
            Ready for exciting, instantaneous,
            <br /> all-accessible insights in real time?
          </p>
        </div>
      </InsightsTitle>

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
