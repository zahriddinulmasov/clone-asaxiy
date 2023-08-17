import { HeaderBtn } from "../../components/headerBtn/headerBtn";

import searchIcon from "../../assets/images/search_icon.svg";

import {
  HeaderWrapper,
  HeaderLogoLInk,
  SearchWrapper,
  SearchInput,
  SearchButton,
  SearchIcon,
  HeaderInternalWrapper,
} from "./header.styles";

import {
  Payment,
  Tracker,
  Language,
  Card,
  Heart,
  Avatar,
} from "../../assets/images/icons";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const btns = [
    {
      id: 1,
      title: "Payment",
      img: <Payment />,
      isYes: false,
    },
    {
      id: 2,
      title: "Tracker",
      img: <Tracker />,
      isYes: false,
    },
    {
      id: 3,
      title: "Language",
      img: <Language />,
      isYes: false,
    },
    {
      id: 4,
      title: "Card",
      img: <Card />,
      isYes: true,
      isBasket: true,
      handleBasket: function handleBasket() {
        return navigate("/product/basket");
      },
    },
    {
      id: 5,
      title: "Heart",
      img: <Heart />,
      isYes: true,
      isBasket: false,
      handleHeart: function handleHeart() {
        return navigate("/product/heart");
      },
    },
    {
      id: 6,
      title: "Avatar",
      img: <Avatar />,
      isYes: false,
    },
  ];

  return (
    <HeaderWrapper>
      <HeaderInternalWrapper>
        <HeaderLogoLInk to="/">LIBWU</HeaderLogoLInk>

        <SearchWrapper>
          <SearchInput type="text" placeholder="Search..." />

          <SearchButton>
            <SearchIcon src={searchIcon} />
            Search
          </SearchButton>
        </SearchWrapper>

        <Box sx={{ flexShrink: 0 }}>
          {btns.map((item) => (
            <HeaderBtn key={item.id} props={item} />
          ))}
        </Box>
      </HeaderInternalWrapper>
    </HeaderWrapper>
  );
};
