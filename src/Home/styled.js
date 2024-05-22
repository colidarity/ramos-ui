import styled from 'styled-components';
import GridBg from '../../assets/images/grid-bg.png';

export const Container = styled.div`
  width: 1300px;
  margin: 2rem auto;
  background-color: var(--white);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
`;

export const ContentSection = styled.section`
  width: 100%;
  height: 768px;
  position: relative;
`;

export const ATFImageStyled = styled.img``;

export const ATFVideo = styled.figure`
  width: 400px;
  height: 250px;
  position: absolute;
  right: 60px;
  top: 178px;
  img {
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const PlayBtn = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 100%;
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  transform: translate(-20px, -18px);
  transition: box-shadow 0.2s ease-in;
  cursor: pointer;
  img {
    height: 12px;
    width: 12px;
    transition: all 0.2s ease-in;
  }
  &:hover {
    img {
      height: 22px;
      width: 22px;
    }
    box-shadow: rgba(0, 0, 0, 0.5) 0px -4px 4px -5px inset;
  }
`;

export const ATFHead = styled.h1`
  font-size: 120px;
  padding-inline: 60px;
  line-height: 120px;
  position: relative;
  top: 200px;

  span {
    color: #1a1a1a;
    text-align: right;
    &.block {
      position: relative;
      overflow: hidden;

      display: block;
      &:nth-child(1) {
        width: 63%;
      }
      &:nth-child(2) {
        width: 63%;
      }
      &:nth-child(3) {
        width: 100%;
      }
    }

    &.space {
      display: inline-block;
      width: 70px;
    }
    &.light {
      color: var(--light-gray);
    }
  }

  span.split {
    /* display: inline-block; */
    /* transform: translateY(120px); */
    position: relative;
    top: 120px;
  }

  ${staggeredTransition()}

  &.animate-heading span span.split {
    top: 0;
  }
`;

function staggeredTransition() {
  return Array(10)
    .fill(0)
    .map(
      (_, blockIdx) => `span.block:nth-child(${blockIdx + 1}) {
      ${Array(20)
        .fill(0)
        .reduce((splits, __, splitIdx) => {
          splits += `
          span.split:nth-child(${splitIdx + 1}) {
            transition: top ${(blockIdx + 7 + splitIdx) / 10}s ease;
          }
        \n`;
          return splits;
        }, '')}
    }
    `
    )
    .join('\n');
}

export const ATFIconGroup = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 205px;
  left: 150px;
  figure {
    margin-left: -20px;
  }
`;

export const RoundedIcon = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: ${(props) =>
    props.borderradius ? props.borderradius : '100%'};
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.bg};
  border: ${(props) => (props.border ? props.border : 'none')};
  img {
    height: ${(props) => (props.imagesize ? props.imagesize : '40px')};
    width: ${(props) => (props.imagesize ? props.imagesize : '40px')};
  }
`;

export const ThirdIco = styled(RoundedIcon)`
  position: absolute;
  top: 455px;
  left: 615px;
`;

export const InsightsWrapper = styled.section`
  background-color: var(--insights-bg);
  border-radius: 100px;
  position: relative;
  overflow: hidden;
`;

export const InsightsFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-inline: 60px;
  margin-block: 60px;
  h2 {
    font-size: 88px;
    display: flex;
    align-items: baseline;
    justify-content: center;
    width: max-content;
    margin-right: 30px;
    small {
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export const InsightsTitle = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 100px;
  padding-inline: 60px;
  div {
    &.left {
      width: 60%;
      h2 {
        font-size: 42px;
      }
    }
    &.right {
      width: 40%;
      p {
        text-align: center;
        line-height: 24px;
        font-size: 18px;
      }
    }
  }
  font-size: 46px;
`;

export const InsightsContent = styled.section`
  display: flex;
  padding-inline: 60px;
  margin-block: 40px;
  gap: 20px;
  > div {
    &.left-card,
    &.right-card {
      border-radius: 20px;
      display: flex;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 25px 20px -20px;
    }
    &.left-card {
      padding: 26px 0 0 26px;
      border: solid thin #ebebeb;
      position: relative;
      width: 60%;
      background: #fff;
      display: flex;
      gap: 10%;
    }
    &.right-card {
      width: 40%;
      background-color: #0d0d0d;
      display: flex;
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      > h3 {
        color: #fff;
        font-size: 24px;
        text-align: center;
      }
      > p {
        font-size: 18px;
        color: #999999;
        text-align: center;
      }
      > div {
        display: flex;
        width: 100%;
        gap: 10px;
        justify-content: center;
        align-items: center;
        .layers,
        .transactions {
          width: 150px;
          height: 150px;
          border: solid thin #424141;
          background: #131111;
          border-radius: 30px;
          transition: 0.5s transform linear;
        }
        .layers {
          transform: translate(20px, 0px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .profile-icons {
            display: flex;
            align-items: center;

            img {
              margin-top: 20px;
              width: 36px;
              height: 36px;
              margin-inline: -5px;
              border-radius: 100%;
              border: 2px solid #0d0d0d;
            }
          }
        }

        .transactions {
          transform: translate(-20px, 0px);
          color: var(--white);
          padding-inline: 20px;
          box-sizing: border-box;
          h5 {
            font-size: 14px;
            margin-block: 20px;
          }

          span.figure {
            display: flex;
            flex-direction: row;
            font-size: 14px;
            justify-content: right;
            sup {
              margin-top: -6px;
            }
          }
        }
      }
    }
  }
  font-size: 46px;
`;

export const Button = styled.button`
  font-size: 0.6rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bg};
  border: ${(props) => (props.border ? props.border : 'none')};
  height: 2.25rem;
  width: ${(props) => (props.width ? props.width : 'auto')};
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  margin-right: 8px;
  border: none;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    font-size: 0.7rem;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.5) 0px -4px 4px -5px inset;
  }
`;

export const SettingUpReportCard = styled.div`
  width: 40%;
  > h3 {
    font-size: 20px;
    line-height: 26px;
    margin-top: 60px;
    color: var(--black);
  }
  > p {
    margin-block: 20px 26px;
    color: var(--gray-text);
    font-size: 16px;
  }
`;

export const SalesStatisticCard = styled.div`
  width: 50%;
  height: 100%;
  border-left: solid thin #e7e7e7;
  border-top: solid thin #e7e7e7;
  border-top-left-radius: 30px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  overflow: hidden;
  h4 {
    font-size: 18px;
    color: var(--black);
  }

  > div {
    display: flex;
    gap: 10px;
  }

  .visit-statistics {
    width: 100%;
  }
  .total-profit {
    width: 60%;
    margin-block: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    figcaption {
      display: flex;
      flex-direction: column;
      width: 103px;
      span {
        &.label {
          font-size: 16px;
          color: var(--gray-text);
        }
        &.amount {
          display: flex;
          align-items: baseline;
          font-size: 28px;
          small {
            display: block;
            margin-right: 10px;
            font-size: 18px;
          }
        }
      }
    }
  }

  .visitors {
    width: 40%;
    margin-block: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #f6f6f6;
    border-radius: 10px;
    padding: 10px 06px;

    figcaption {
      font-size: 16px;
      color: var(--black);
    }

    span.progress-bar {
      width: 80%;
      height: 3px;
      display: block;
      margin-block: 10px;
      background-color: var(--light-gray);
      position: relative;

      &:after {
        transition: width 1s ease-in-out;
        width: 0%;
        position: absolute;
        background-color: var(--green);
        height: 3px;
        left: 0;
        content: ' ';
      }

      &.animated {
        &:after {
          width: 30%;
        }
      }
    }

    span.counter {
      font-size: 24px;
      display: flex;
      flex-direction: row;
      sup {
        margin-left: 6px;
        display: flex;
        flex-direction: row;
        color: var(--green);
        font-size: 12px;
      }
    }
  }
`;

export const BigH1 = styled.h1`
  font-size: ${(props) => (props.fontsize ? props.fontsize : '120px')};
  position: relative;
  font-weight: normal;
  color: ${(props) => (props.color ? props.color : 'var(--black)')};
  text-align: ${(props) => (props.textalign ? props.textalign : 'left')};
  sup {
    font-size: 72px;
  }
  span.light {
    text-align: right;
    color: var(--light-gray);
  }

  ${staggeredTransition()}

  &.animate-heading span span.split {
    top: 0;
  }

  span {
    &.split {
      /* display: inline-block; */
      /* transform: translateY(120px); */
      position: relative;
      top: 120px;
    }
    &.block {
      position: relative;
      overflow: hidden;

      display: block;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CTAWrapper = styled.section`
  padding: 100px 60px;
  height: 768px;
  box-sizing: border-box;
  .cta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block: 40px;
  }

  .badges {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid thin #efefef;
    padding-bottom: 40px;
    .icons {
      display: flex;
      justify-content: left;
      align-items: center;
      margin-block: 20px;
      figure {
        margin: 0 -5px;
        &:nth-child(1) {
          z-index: 1;
        }
        &:nth-child(2) {
          z-index: 2;
        }
      }
    }

    .badge {
      width: 435px;
      height: 140px;
      background: var(--yellow);
      padding: 12px;
      overflow: hidden;
      border-radius: 70px;
      position: relative;
      h2 {
        position: absolute;
        animation: animateMarquee 8s linear infinite;
        font-size: 120px;
        color: var(--black);
        line-height: 120px;
        width: max-content;
        span {
          padding-inline: 100px;
        }
      }
    }
  }
`;

export const FooterWrapper = styled.footer`
  background-color: #0d0d0d;
  padding: 100px 60px 40px;

  a {
    color: #e3e3e3;
    text-decoration: none;
    transition: color 0.3s ease-in;
    cursor: pointer;
  }

  .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding-bottom: 3rem;

    .footer-nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #e3e3e3;
      list-style-type: none;
      gap: 40px;
      li a {
        color: #9d9d9d;
      }
    }

    .ramos-footer-email {
      font-size: 3rem;
      margin: 0;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  .ramos-footer-middle {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    font-size: 16px;
    margin-block: 40px 30px;
    h5,
    p {
      font-size: 14px;
      line-height: 20px;
    }
    h5 {
      font-weight: bold;
    }
    p {
      &.light {
        color: #c4c4c4;
      }
    }

    .ramos-footer-address {
      display: flex;
      line-height: 1.3rem;
      gap: 6rem;
      h5 {
        color: var(--white);
      }
      p {
        color: #9d9d9d;
      }
    }

    .ramos-footer-social {
      text-align: right;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        text-decoration: none;
        color: #f4f3f3;
        font-size: 16px;
      }
    }
  }

  .ramos-footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      color: #9d9d9d;
      text-decoration: none;
    }

    .footer-qr {
      width: 120px;
      height: auto;
    }
  }
`;

export const FullControlWrapper = styled.section`
  padding: 100px 60px 50px;
  box-sizing: border-box;
`;

export const GetStartedWrapper = styled.section`
  padding: 50px 60px;
  box-sizing: border-box;

  .get-started-sec {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    overflow: hidden;
    .logo-ico {
      border-radius: 30px;
      height: 150px;
      width: 150px;
      background-color: var(--orange);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(254, 74, 35, 0.25) 0px 25px 20px -6px;
      transition: all 0.5s ease-out;

      &.animated {
        width: 100px;
        height: 100px;
      }

      img {
        width: 46px;
        height: 46px;
      }
    }
    p {
      text-align: center;
      color: var(--gray-text);
      font-size: 22px;
      line-height: 26px;
    }
  }
`;

export const DataControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 60px;
  overflow: hidden;
  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 30px;
    overflow: hidden;
    width: 580px;
    height: 580px;
    background-image: url(${GridBg});
    background-position: -2px -2px;
    background-size: 70px;
    position: relative;
    &:after {
      z-index: 1;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        rgba(249, 249, 249, 0),
        rgba(249, 249, 249, 1)
      );
    }

    > * {
      z-index: 2;
    }

    h4,
    p {
      text-align: center;
    }
    h4 {
      text-align: center;
      color: var(--black);
      font-size: 32px;
    }
    > p {
      font-size: 18px;
      color: '#242424';
      line-height: 26px;
    }
  }
`;

export const ImprovedCustomerService = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  overflow: hidden;
  h4 {
    margin-top: 60px;
  }
`;

export const PerformanceCard = styled.div`
  display: flex;
  align-items: space-evenly;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  width: 200px;
  box-sizing: border-box;
  h6.title {
    font-size: 12px;
    margin-bottom: 20px;
  }
`;

export const SalesRevenue = styled(PerformanceCard)`
  box-shadow: rgba(0, 0, 0, 0.12) -20px 20px 20px -20px;
  transform: translateY(30px);
  padding: 20px;
  justify-content: center;
  align-items: flex-start;

  h6.title {
    color: var(--gray-text);
    text-align: left;
  }

  .revenue {
    font-size: 32px;
    small {
      margin-right: 10px;
      font-size: 24px;
    }
  }
`;

export const AnimatedBar = styled.figure`
  width: 0%;
  position: relative;
  display: block;
  margin: 20px 33%;
  height: 5px;
  background-color: var(--yellow);
  border-radius: 3px;
  transition: width 1s ease-in-out;
  transition-delay: 1s;

  &:after,
  &:before {
    border-radius: 3px;
    position: absolute;
    width: 0%;
    height: 5px;
    background-color: var(--green);
    transition: width 0.33s linear;
    content: ' ';
    animation-direction: normal;
  }
  &:before {
    left: -57px;
  }
  &:after {
    left: 57px;
  }

  &.animate {
    width: 33%;
    &:after,
    &:before {
      width: 100%;
    }
  }
`;

export const Price = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .row {
    display: flex;
    align-items: center;
    justify-content: left;
    min-height: 30px;
    figure {
      margin-right: 06px;
    }

    &:last-child {
      border-top: solid thin var(--light-gray);
      padding-block: 6px;
    }
  }
  p {
    font-size: 12px;
    color: var(--gray-text);
  }
  span {
    margin-left: auto;
    font-weight: 500;
    color: var(--black);
    font-size: 12px;
  }
`;

export const ConversionRate = styled(PerformanceCard)`
  box-shadow: rgba(0, 0, 0, 0.12) 0px 25px 20px -20px;
  padding: 40px;
  justify-content: center;
  align-items: center;
  h6.title {
    color: var(--black);
  }
  .conversion-rate {
    background-color: var(--yellow);
    width: 120px;
    height: 80px;
    border-radius: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    figure {
      position: absolute;
      top: -14px;
      left: -14px;
    }

    h5.rate {
      font-size: 46px;

      small {
        font-size: 30px;
      }
    }
  }

  p {
    font-size: 12px !important;
    color: var(--gray-text);
    margin-top: 16px;
    line-height: 16px;
  }
`;

export const CardFlex = styled.div`
  display: flex;
  > div {
    margin: -10px;
  }
`;

export const MonitoringKeyIndicators = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  box-sizing: border-box;
  h4 {
    margin-top: 20px;
  }
`;

export const DataVisualization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 16px;
  h5 {
    display: flex;
    align-items: center;
    justify-content: left;
    figure {
      margin-right: 10px;
    }
  }

  .card-bg {
    width: 340px;
    border: solid thin #e8e8e8;
    background-color: var(--white);
    padding: 10px 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    position: relative;
    box-sizing: border-box;
    &:before {
      width: 280px;
      height: 25px;
      border: solid thin #e8e8e8;
      border-bottom: none;
      background-color: var(--white);
      content: ' ';
      position: absolute;
      left: 30px;
      top: -27px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }
  }

  .insights {
    background-color: var(--white);
    border: solid thin #e8e8e8;
    border-radius: 20px;
    width: 400px;
    height: 200px;
    padding: 20px;

    .insights-chart {
      width: 100%;
    }
  }
`;

export const VisualizationWrapper = styled.section`
  background: linear-gradient(rgba(244, 243, 243, 1), rgba(249, 249, 249, 1));
  border-radius: 100px;
  padding-top: 100px;
  overflow: hidden;

  .info {
    display: flex;
    width: 100%;
    padding: 50px 0 0 60px;
    box-sizing: border-box;
    div.half-width {
      width: 50%;
      box-sizing: border-box;
    }
  }

  .info h3 {
    margin-bottom: 50px;
    font-size: 45px;
    font-weight: normal;
  }

  .accordion {
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 295px;
    min-height: 210px;
    &.animate__animated {
      li {
        margin: 0;
      }
    }

    li {
      transition: margin 1s ease-in-out;
      margin: -20px 0;
      background-color: #fff;
      padding: 15px;
      border-radius: 18px;
      box-shadow: rgba(0, 0, 0, 0.12) 1px 9px 8px 0px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease-out;
      font-size: 14px;
      &:hover {
        cursor: pointer;
        font-size: 16px;
        background-color: var(--body-bg);
      }
    }
  }

  .devices {
    position: relative;
    .ipad {
      position: absolute;
      right: 0;
      img {
        width: 690px;
        height: auto;
        border-top-left-radius: 54px;
        border-bottom-left-radius: 53px;
        box-shadow: rgba(0, 0, 0, 0.2) 50px 20px 25px 6px;
      }
    }
    .iphone {
      position: absolute;
      left: -218px;
      top: 182px;
      z-index: 2;
      img {
        width: 300px;
        height: 650px;
        border-radius: 40px;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 25px 0px;
      }
    }
  }

  .ramos-big-text {
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    text-align: center;
    font-size: 398px;
    line-height: 300px;
    margin-block: 250px 0;
    padding: 60px;
    z-index: 1;
    color: #fe4a23;
    font-weight: 500;
    background-image: url(${GridBg});
    background-size: 70px;
    top: 300px;
    width: 1300px;
    height: 420px;
    box-sizing: border-box;
    span {
      display: block;
      box-sizing: border-box;
      width: 0;
      height: 0;
      border-bottom-right-radius: 100%;
      overflow: hidden;
      transition:
        width 2s ease-in-out 0s,
        height 2s ease-in-out 0s,
        border-bottom-right-radius 2s ease-in-out;
    }

    &.animate-heading {
      span {
        width: 100%;
        height: 100%;
        border-bottom-right-radius: 0;
      }
    }
  }
`;

export const InsightsData = styled.div`
  .insightdata-container {
    display: flex;
    gap: 15px;
    text-align: left;
    align-items: flex-start;
    span:first-child {
      color: var(--gray-text);
      font-size: 12px;
    }
    .left {
      width: 40%;
      h5 {
        margin-bottom: 65px;
      }
    }
    .right {
      width: 60%;
    }
    .revenue {
      font-size: 32px;
      text-align: left;
      small {
        margin-right: 10px;
        font-size: 24px;
      }
    }
    button {
      background-color: var(--yellow);
    }
  }
`;
