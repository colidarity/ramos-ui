import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 0.6rem;
  background-color: var(--white);
  color: var(--black);
  height: 2.25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 10px;
  margin-right: 8px;
  border: none;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #efefef;
    cursor: pointer;
  }
`;
