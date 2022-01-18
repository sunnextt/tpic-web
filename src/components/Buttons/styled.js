import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonContext = styled(Button)`
  ${({ type, backgroundcolor, theme }) =>
    type !== 'ghost'
      ? `background-color: ${
          backgroundcolor === 'primary' ? theme.colors.colorOrangePrimary : theme.colors.colorOrangePrimary
        };`
      : 'background-color: transparent;'}
  ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.colorWhite : theme.colors.colorWhite};`}
  ${({ backgroundcolor, theme }) =>
    `border: 1px solid ${backgroundcolor === 'primary' ? theme.colors.colorWhite : theme.colors.colorWhite};`}
    border-radius: 6px;

  &:hover,
  &:active,
  &:focus {
    ${({ type, backgroundcolor, theme }) =>
      type !== 'ghost'
        ? `background-color: ${backgroundcolor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`
        : 'background-color: transparent;'}
    ${({ color, theme }) => `color: ${color === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}
        ${({ backgroundcolor, theme }) =>
      `border: 1px solid ${backgroundcolor === 'primary' ? theme.colors.yellow[100] : theme.colors.blue[100]};`}
  }
`;
