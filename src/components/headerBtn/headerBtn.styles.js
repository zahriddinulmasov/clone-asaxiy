import styled from "styled-components";

export const HeaderBtnWrapper = styled.button`
  padding: 0 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;

  :hover {
    fill: rgb(0, 141, 255) ;
    color: rgb(0, 141, 255) ;
    transition: all 0.4s;
  }
`;

export const HeaderBtnContent = styled.p`
  margin: 0;
  font-weight: 600;
  line-height: 12px;
`;
