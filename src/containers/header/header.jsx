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
import { useDispatch } from "react-redux";
import { mainInfoActions } from "../../store/commonData";
import { useState } from "react";

const counter = JSON.parse(window.localStorage.getItem("count"));

export const Header = () => {
  const [count, setCount] = useState(counter);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      click: function handlelLang() {
        if (count) {
          setCount(count + 1);

          if (count === 3) setCount(1);
          window.localStorage.setItem("count", JSON.stringify(count));
        }

        if (count === 1) {
          dispatch(mainInfoActions.replacedLang("uz"));
          window.localStorage.setItem("lang", JSON.stringify("uz"));
        } else if (count === 2) {
          dispatch(mainInfoActions.replacedLang("ru"));
          window.localStorage.setItem("lang", JSON.stringify("ru"));
        } else {
          dispatch(mainInfoActions.replacedLang("en"));
          window.localStorage.setItem("lang", JSON.stringify("en"));
        }
      },
    },
    {
      id: 4,
      title: "Card",
      img: <Card />,
      isYes: true,
      isBasket: true,
      click: function handleBasket() {
        return navigate("/product/basket");
      },
    },
    {
      id: 5,
      title: "Heart",
      img: <Heart />,
      isYes: true,
      isBasket: false,
      click: function handleHeart() {
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
