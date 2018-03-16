import styled, { css } from 'styled-components';
import { LI, UL } from '../base';
import { color } from '../variables';

export const TLWrapper = styled.div`
  color: ${color.text};
  background-color: ${color.background};
  border-radius: 8px;
  flex: 0 1 600px;
`;

export const TLDate = styled.h1`
  grid-area: date;
  margin: 0;
  font-weight: normal;
  color: ${color.textSpecial};
`;

export const TLMonth = styled.h4`
  grid-area: month;
  margin: 0;
  font-weight: normal;
  color: ${color.textLight};
  text-indent: 5px;
`;

export const TLCount = styled.span`
  grid-area: count;
  color: ${color.textLight};
`;

export const TLHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas: "date count" "month .";
  align-items: end;
  border-radius: 8px 8px 0 0;
  padding: 24px;
  border-bottom: 1px solid ${color.divider};
  background-color: ${color.backgroundSpecial};
`;

export const TLNew = styled.div`
  padding: 24px;
`;

export const TLList = UL.extend`
  padding: 0;
`;

const editShow = css`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  border: none;
`;

export const TLEdit = styled.input`
  ${editShow}
  outline: none;
  font-family: inherit;
`;

export const TLShow = styled.p`
  ${editShow}
`;

const completedCss = css`
  > ${TLShow} {
    text-decoration: line-through;
    color: ${color.textLight};
  }
`;

export const TLItem = LI.extend`
  padding: 16px 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 16px;
  align-items: center;
  :not(:last-of-type) { border-bottom: .5px solid ${color.dividerLight}; }

  ${({ completed }) => completed && completedCss}
`;
