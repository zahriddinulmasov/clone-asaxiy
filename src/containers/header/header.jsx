import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useRef, useState } from "react";

import { HeaderBtn } from "../../components/headerBtn/headerBtn";
import searchIcon from "../../assets/images/search_icon.svg";
import { mainInfoActions } from "../../store/commonData";

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
import RegModal from "../regModal/regModal";

const counter = JSON.parse(window.localStorage.getItem("count"));

export const Header = () => {
  const [count, setCount] = useState(counter);
  const [open, setOpen] = useState(false);

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
      title: {
        function: function handleLang() {
          if (count === 1) return "Language";
          if (count === 2) return "Til";
          if (count === 3) return "Язык";
        },
      },
      img: <Language />,
      isYes: false,
      click: function handlelLang() {
        if (count === 3) {
          window.localStorage.setItem("count", JSON.stringify(1));
        } else {
          window.localStorage.setItem("count", JSON.stringify(count + 1));
        }

        if (count === 1) {
          dispatch(mainInfoActions.replacedLang("uz"));
          window.localStorage.setItem("lang", JSON.stringify("uz"));
          setCount(count + 1);
        } else if (count === 2) {
          dispatch(mainInfoActions.replacedLang("ru"));
          window.localStorage.setItem("lang", JSON.stringify("ru"));
          setCount(count + 1);
        } else {
          dispatch(mainInfoActions.replacedLang("en"));
          window.localStorage.setItem("lang", JSON.stringify("en"));
          setCount(1);
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
      click: function handleOpen() {
        if (open) {
          return setOpen(false);
        } else {
         return setOpen(true);
        }
      },
    },
  ];

  const formRef = useRef(null);
  const searchRef = useRef(null);

  function handleSubmit(evt) {
    evt.preventDefault();

    dispatch(mainInfoActions.mainSearch(searchRef.current.value));
    navigate("/");
    formRef.current.reset();
  }

  return (
    <HeaderWrapper>
      <HeaderInternalWrapper>
        <HeaderLogoLInk to="/">LIBWU</HeaderLogoLInk>

        <SearchWrapper onSubmit={handleSubmit} ref={formRef}>
          <SearchInput ref={searchRef} type="text" placeholder="Search..." />

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

      <RegModal open={open} click={btns[btns.length - 1].click} />
    </HeaderWrapper>
  );
};
