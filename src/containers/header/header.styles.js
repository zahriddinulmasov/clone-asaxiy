import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #e6e8ee;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  background-color: #fff;
`;
export const HeaderInternalWrapper = styled.div`
  margin: 0 auto;
  padding: 17px 15px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const HeaderLogoLInk = styled(Link)`
  margin-right: 12px;
  font-size: 22px;
  color: #008dff;
  font-weight: 600;
  text-decoration: none;
  font-style: italic;
`;

export const SearchWrapper = styled.div`
  display: flex;
  border: 1px solid #008dff;
  border-radius: 10px;
  width: 100%;
`;

export const SearchInput = styled.input`
  padding: 0 8px;
  height: 30px;
  width: 100%;
  color: #008dff;
  background-color: white;
  outline: none;
  border-radius: 9px;
  z-index: 2;
  border: 1px solid #008dff;

  ::placeholder {
    color: #c2c6d1;
  }
`;

export const SearchButton = styled.button`
  margin-left: -8px;
  padding: 0 10px 0 12px;
  display: flex;
  align-items: center;
  color: white;
  border: none;
  background-color: #008dff;
  cursor: pointer;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;

  :hover {
    background-color: #006aff;
  }
`;

export const SearchIcon = styled.img`
  margin-right: 2px;
  width: 20px;
`;

export const HeaderBtn = styled.button`
  border: none;
  background-color: inherit;
`;

export const HeaderBtnImg = styled.img`
  width: 20px;
`;

export const HeaderBtnContent = styled.p`
  margin: 0;
  font-weight: 600;
`;
