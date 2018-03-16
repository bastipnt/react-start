import styled from 'styled-components';
import { color } from '../variables';

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  position: relative;
  visibility: hidden;

  ::before {
    visibility: visible;
    display: block;
    border: 2px solid ${color.checkboxBorder};
    padding: 1px 0 0 1px;
    border-radius: 3px;
    font-family: FontAwesome, sans-serif;
    line-height: 11px;
    font-size: 11px;
    content: '';
    width: 16px;
    height: 16px;
    cursor: pointer;
  }

  :checked ::before {
    content: '\f00c';
    background-color: ${color.checkboxBackground};
    color: ${color.checkboxText};
    border-color: transparent;
  }
`;

export const Input = styled.input`
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 18px;
  line-height: 24px;
  outline: none;
  background-color: ${color.backgroundDark};
  width: 100%;
  color: ${color.textSpecial};

  ::placeholder {
    color: ${color.placeholder};
  }
`;
