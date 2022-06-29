import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const FocusBorder = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #3399ff;
  transition: 0.4s;
`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  top: 9px;
  color: #aaa;
  transition: 0.3s;
  z-index: -1;
  letter-spacing: 0.5px;
`;

export const Input = styled.input<{ hasContent: boolean }>`
  font: 20px "Lato", Arial, sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;
  background-color: transparent;
  &:focus {
    outline: none;
    & ~ ${FocusBorder} {
      width: 100%;
      transition: 0.4s;
    }
    & ~ ${Label} {
      top: -16px;
      font-size: 12px;
      color: #3399ff;
      transition: 0.3s;
    }
  }
  ${({ hasContent }) =>
    hasContent &&
    css`
      & ~ ${FocusBorder} {
        width: 100%;
        transition: 0.4s;
      }
      & ~ ${Label} {
        top: -16px;
        font-size: 12px;
        color: #3399ff;
        transition: 0.3s;
      }
    `}
`;
