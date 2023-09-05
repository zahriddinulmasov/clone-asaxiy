import styled from "styled-components";

export const BtnWrapper = styled.button`
  margin-right: ${({ style }) =>
    style.marginRight ? `${style.marginRight}` : 0};
  margin-top: 12px;
  padding: ${({style}) => style.padding || "16px 20px"};
  font-size: 13px;
  max-width: ${({style}) => style.maxWidth ? style.maxWidth : "213px"};
  width: 100%;
  height: ${({ style }) => style.height};
  border-radius: 10px;
  border: ${({ style }) =>
    style.borderRadius ? `${style.borderRadius}` : "none"};
  color: ${({ style }) => `${style.color}`};
  background-color: ${({ style }) => `${style.backgroundColor}`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const Img = styled.img`
margin-right: 4px;
`
