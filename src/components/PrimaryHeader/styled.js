import styled from 'styled-components';

export const StyledHeader = styled.div`
  height: 3rem;
  margin: 0.75rem 1.5rem;
  border-radius: 14px;
  overflow: hidden;
  background-color: var(--header-bg);
`;

export const Logo = styled.a`
  text-decoration: none;
  display: inline;
  height: 30px;
  img {
    margin-left: 10px;
    height: 30px;
    width: 100px;
  }
`;

export const Nav = styled.nav`
  width: 40%;
  height: 2.25rem;
  border-radius: 10px;
  background-color: var(--nav-bg);
  display: flex;
  align-items: center;
  padding-inline: 1rem;
  ul {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-between;
    li a {
      color: var(--white);
      text-decoration: none;
      font-size: 12px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
