import styled from 'styled-components';

export const UL = styled.ul`
  margin: 0;
  padding: 8px;
`;

export const LI = styled.li`
  list-style: ${({ bullets }) => bullets ? 'circle' : 'none'};
`;
