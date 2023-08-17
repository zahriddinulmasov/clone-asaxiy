import { Link } from "react-router-dom";
import styled from "styled-components";


export const NavbarWrapper = styled.nav`
  background: white;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  position: fixed;
  left: 0;
  right: 0;
  top: 70px;
  z-index: 9;
  background-color: #fff;
`;

export const NavbarList = styled.ul`
  margin: 0 auto;
  padding: 11px 15px;
  max-width: 1300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

export const NavbarItem = styled.li`
  list-style: none;
`;

export const NavbarHamburger = styled.button`
  padding: 3px;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  border: none;
  color: #282830;
  display: flex;
  align-items: center;
  background-color: #fff !important;
  flex-shrink: 0;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: rgb(0, 141, 255);
    transition: all 0.3s;
  }
`;

export const NavbarLink = styled(Link)`
  padding: 3px 8px;
  font-size: 15px;
  font-weight: 500;
  line-height: 19px;
  color: #282830;
  text-decoration: none;
  transition: all 0.3s;

  :hover {
    color: rgb(0, 141, 255);
    transition: all 0.3s;
  }
`;
