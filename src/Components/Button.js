import styled, { css } from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.5em 1em;
  background: transparent;
  color: #0E94D3;
  border: 2px solid #0E94D3;
  transition: all .9s;

  &:hover {
    background: #0E94D3;
    color: white;
  }

  ${props => props.color && css`
    background: ${props => props.color};
    color: white;

    &:hover {
      background: #004566;

    }
  `}
`;

export default Button;