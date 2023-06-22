import { styled, css } from 'styled-components'

export const ButtonContainer = styled.button`
  position: relative;
  background-color: #565656;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  color: #ffffff;
  border-radius: 22px;

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      background-color: #e4105d;
      min-width: 167px;
      height: 33px;

      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`
