// @flow
import styled from 'styled-components';
import { color } from '../variables';

export const HeaderBar = styled.header`
  background-color: ${color.header};
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-areas: "back title link";
  align-content: center;
  align-items: center;
  padding: 16px;
`;

export const HeaderTitle = styled.h1`
  grid-area: title;
  margin: 0;
  color: ${color.textHeader};
  line-height: 44px;
  padding: 0 10px;
`;

export const HeaderBack = styled.h1`
  grid-area: back;
  margin: 0;

  > a {
    color: ${color.textHeader};
  }
`;

export const HeaderLink = styled.div`
  grid-area: link;
  justify-self: end;

  > a {
    display: inline-block;
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
    background-color: ${color.background};
    border-radius: 3px;
    color: ${color.textSpecial};
    text-decoration: none;
    font-weight: bold;
  }
`;
