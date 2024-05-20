import styled from 'styled-components';

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
  transform: translate(-20px, -18px);
  transition: all 0.2s ease-in;
  cursor: pointer;
  img {
    height: 12px;
    width: 12px;
  }
  &:hover {
    transform: translate(-19px, -17px);
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
`;

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
  border-radius: 100%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  background-color: ${(props) => props.bg};
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
        }
        .layers {
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
          color: var(--white);
          padding-inline: 20px;
          box-sizing: border-box;
          h5 {
            font-size: 14px;
            margin-block: 20px;
          }

          span {
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
    cursor: pointer;
    transform: translate(1px, 1px);
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
  padding: 20px;
  box-sizing: border-box;
  h4 {
    font-size: 18px;
    color: var(--black);
  }

  > div {
    display: flex;
    gap: 10px;
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
        width: 30%;
        position: absolute;
        background-color: var(--green);
        height: 3px;
        left: 0;
        content: ' ';
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
  font-size: 120px;
  position: relative;
  font-weight: normal;
  line-height: 120px;
  color: ${(props) => (props.color ? props.color : 'var(--black)')};
  text-align: ${(props) => (props.textalign ? props.textalign : 'left')};
  sup {
    font-size: 72px;
  }
  span.light {
    text-align: right;
    color: var(--light-gray);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CTAWrapper = styled.section`
  padding: 100px 60px;

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

export const GetStartedWrapper = styled.section`
  padding: 100px 60px;
  .get-started-sec {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    .logo-ico {
      border-radius: 30px;
      height: 100px;
      width: 100px;
      background-color: var(--orange);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: rgba(254, 74, 35, 0.25) 0px 25px 20px -6px;
      img {
        width: 46px;
        height: 46px;
      }
    }
    p {
      text-align: center;
      color: var(--gray-text);

      font-size: 22px;
    }
  }
`;
