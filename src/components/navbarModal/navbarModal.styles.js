import styled from "styled-components";

export const ModalWrapper = styled.div`
  padding: 0 15px;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 7;
  box-shadow: 0px 15px 10px -15px rgba(0, 0, 0, 0.3);
  `;

export const ModalLeft = styled.ul`
  margin: 0 auto;
  box-sizing: border-box;
  padding: 130px 15px 16px;
  max-width: 1300px;
  width: 100%;
  height: fit-content;
  list-style: none;
  background-color: #fff;
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  background-color: inherit;
  flex-shrink: 0;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    color: rgb(0, 141, 255);
    transition: all 0.3s;
  }
`;
