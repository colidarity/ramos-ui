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

export const Heading = styled.heading;

export const ATFVideo = styled.figure`
  width: 350px;
  height: 200px;
  position: absolute;
  right: 200px;
  top: 180px;
  img {
    border-radius: 20px;
    overflow: hidden;
  }
`;

export const PlayBtn = styled.button`
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 100%;
  background-color: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-10px, -10px);
  img {
    height: 12px;
    width: 12px;
  }
`;

export const ATFHead = styled.h1`
  font-size: 86px;
  position: relative;
  top: 200px;
  span {
    color: #1a1a1a;
    text-align: right;
    &.block {
      display: block;
      &:nth-child(1) {
        width: 55%;
      }
      &:nth-child(2) {
        width: 55%;
      }
      &:nth-child(3) {
        width: 80%;
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
  top: 200px;
  left: 240px;
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
    height: ${(props) => (props.imageSize ? props.imageSize : '40px')};
    width: ${(props) => (props.imageSize ? props.imageSize : '40px')};
  }
`;

export const ThirdIco = styled(RoundedIcon)`
  position: absolute;
  top: 425px;
  left: 580px;
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
  padding-inline: 100px;
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
  margin-block: 80px;
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
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
    cursor: pointer;
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
    font-weight: 400;
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

    p {
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
