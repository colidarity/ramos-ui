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
  height: 100vh;
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
      width: 80px;
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
    height: 40px;
    width: 40px;
  }
`;

export const ThirdIco = styled(RoundedIcon)`
  position: absolute;
  top: 425px;
  left: 580px;
`;
