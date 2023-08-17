import { HeaderBtnContent, HeaderBtnWrapper } from "./headerBtn.styles";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import "./headerBtn.styles";
import { useSelector } from "react-redux";

export const HeaderBtn = ({ props }) => {
  const { img, title, isYes, isBasket, handleBasket, handleHeart } = props;

  const StyledBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
      right: -5,
      top: 9,
      fontSize: "12px",
      backgroundColor: "rgb(0, 141, 255)",
      color: "white",
      padding: "0 ",
    },
  }));

  const basketProducts =
    JSON.parse(window.localStorage.getItem("basket")) || [];

  const heartProducts = JSON.parse(window.localStorage.getItem("heart")) || [];

  let selectorBasket =
    useSelector((state) => state.commonInfo.basket) !== null
      ? basketProducts
      : [];

  let selectorHeart =
    useSelector((state) => state.commonInfo.heart) !== null
      ? heartProducts
      : [];

  return (
    <HeaderBtnWrapper
      id="header"
      onClick={isBasket ? handleBasket : handleHeart}
    >
      {isYes ? (
        <StyledBadge
          badgeContent={
            isBasket === true ? selectorBasket.length : selectorHeart.length
          }
        >
          {img}
        </StyledBadge>
      ) : (
        <StyledBadge>{img}</StyledBadge>
      )}

      <HeaderBtnContent>{title}</HeaderBtnContent>
    </HeaderBtnWrapper>
  );
};
