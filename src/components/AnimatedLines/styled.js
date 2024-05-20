import styled from 'styled-components';

export const AnimatedIco = styled.figure`
  width: 78px;
  height: 78px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    display: inline-block;
    background-color: var(--black);
    width: 10px;
    border-radius: 3px;
    margin-inline: 2px;
    position: absolute;
    &:nth-child(1) {
      height: 20px;
      bottom: 25px;
      left: 25px;
    }
    &:nth-child(2) {
      height: 30px;
      bottom: 30px;
      left: 35px;
    }
    &:nth-child(3) {
      height: 10px;
      bottom: 35px;
      left: 45px;
    }
  }
`;
