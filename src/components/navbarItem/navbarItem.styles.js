import { Accordion } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarItemWrapper = styled.li`
  max-width: 250px;
  width: 100%;
  :hover a {
    display: block;
  }
`;

export const AccordionStyle = styled(Accordion)`
  background-color: inherit !important;
  box-shadow: none !important;
  border-radius: none;
`;

export const NavbarItemLink = styled(Link)`
  margin-right: 10px;
  padding: 0 5px;
  font-weight: 500;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #282830;

  :hover {
    color: #008dff;
    background-color: white;
    transition: all 0.1s;
  }
`;

export const NavbarItemText = styled.span`
  margin: 0 4px 0 6px;
`;

export const NavbarSmallItemLink = styled(Link)`
  margin: 0 10px 0 6px;
  padding: 8px 5px 8px 12px;
  color: rgba(40, 40, 48);
  text-decoration: none;
  display: none;

  :hover {
    color: #007bff;
    background-color: white;
    transition: all 0.2s;
  }
`;
