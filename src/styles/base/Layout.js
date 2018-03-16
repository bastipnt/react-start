import styled from 'styled-components';

export const Main = styled.main`
  flex: 1;
  display: grid;
  grid-template-rows: 76px calc(100vh - 76px);
  background-image: linear-gradient(45deg, #f77676, #595ce2);
`;

export const Page = styled.section`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
`;

export const ScrollArea = styled.div`
  overflow-y: auto;
`;
