import styled, { css } from 'styled-components';
import { color } from '../variables';

const styles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${color.textDark};
  }

  a {
    color: ${color.link};
    text-decoration: none;

    :hover { text-decoration: underline; }
  }

  strong { color: ${color.textDark}; }

  code {
    background-color: ${color.backgroundDark};
    border-radius: 3px;
  }
`;

export const MD = styled.div`
  background-color: ${color.background};
  color: ${color.text};
  border-radius: 8px;
  padding: 24px;
  flex: 0 1 1000px;
  ${styles}
`;
