import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Box, Rating } from "@mui/material";

import {
  CardDescription,
  CardIconsWrapper,
  CardImg,
  CardImgWrapper,
  CardNewPrice,
  CardPrice,
  CardWrapper,
  CommentLink,
  CommentText,
  CommentWrapper,
  StyleFavoriteBorderIcon,
  StyleShoppingBasketIcon,
} from "./productCard.styles";

import { Comment } from "../../assets/images/icons";
import { CardBtn } from "../cardBtn/cardBtn";
import { mainInfoActions } from "../../store/commonData";

import basketIcon from "../../assets/images/basket.png";
import heartIcon from "../../assets/images/heart2.svg";

const style = {
  height: "20px",
  title: "Buy in 1 click",
  backgroundColor: "#008dff",
  color: "#fff",
};

let basketArr = JSON.parse(window.localStorage.getItem("basket")) || [];
let heartArr = JSON.parse(window.localStorage.getItem("heart")) || [];

function ProductCard({ props }) {
  const { average_rating, product_image, sales_price, name, slug, price, id } =
    props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const img = product_image[0]?.image;

  let selector = useSelector((state) => state.commonInfo.data);
  let selectorSelected =
    useSelector((state) => state.commonInfo.basket) || basketArr;

  // console.log(basketArr);

  function handleCard() {
    navigate(`/products/${slug}`);
  }

  const handleBasket = (evt) => {
    let count1 = 0;
    const currentData = selector.find((item) => item.id === evt.target.id * 1);

    selectorSelected.forEach((item) => {
      if (item.id === currentData.id) {
        return count1++;
      }
    });

    if (count1 === 0) {
      selectorSelected = [currentData, ...selectorSelected];
      dispatch(mainInfoActions.infoBasket(selectorSelected));
      window.localStorage.setItem("basket", JSON.stringify(selectorSelected));
    } else {
      const currentSelectorSelected = selectorSelected.filter(
        (item) => item.id !== currentData.id
      );

      selectorSelected = [...currentSelectorSelected];
      dispatch(mainInfoActions.infoBasket(selectorSelected));
      window.localStorage.setItem("basket", JSON.stringify(selectorSelected));
    }
  };

  function handleHeart(evt) {
    const currentData = selector.find((item) => item.id === evt.target.id * 1);

    let count2 = 0;
    heartArr.forEach((item) => {
      if (item.id === currentData.id) {
        return count2++;
      }
    });

    if (count2 === 0) {
      heartArr = [currentData, ...heartArr];
      dispatch(mainInfoActions.infoHeart(heartArr));
      window.localStorage.setItem("heart", JSON.stringify(heartArr));
    } else {
      const currentHeartArr = heartArr.filter(
        (item) => item.id !== currentData.id
      );

      heartArr = [...currentHeartArr];
      dispatch(mainInfoActions.infoHeart(heartArr));
      window.localStorage.setItem("heart", JSON.stringify(heartArr));
    }
  }

  return (
    <>
      <CardWrapper>
        <CardIconsWrapper>
          <StyleShoppingBasketIcon
            id={id}
            src={basketIcon}
            width="30"
            onClick={(evt) => handleBasket(evt)}
          />
          <StyleFavoriteBorderIcon
            src={heartIcon}
            id={id}
            width="24"
            fontSize="large"
            onClick={(evt) => handleHeart(evt)}
          />
        </CardIconsWrapper>

        <Box onClick={handleCard}>
          <CardImgWrapper sx={{ textAlign: "center" }}>
            <CardImg
              // id={ }
              src={img || `https://picsum.photos/230/160`}
              alt="https://picsum.photos/230/160"
              height="160"
              width="auto"
            />
          </CardImgWrapper>

          <CardDescription>{name}</CardDescription>

          <CommentWrapper>
            <Rating
              name="half-rating"
              precision={0.5}
              value={average_rating}
              readOnly
              // onChange={(event, newValue) => {
              //   setValue(newValue);
              // }}
              size="small"
            />

            <CommentLink>
              <Comment />
              <CommentText>0 reviews</CommentText>
            </CommentLink>
          </CommentWrapper>

          <Box>
            <CardPrice>{price !== sales_price ? `${price} som` : ""}</CardPrice>
            <CardNewPrice>{sales_price} com</CardNewPrice>
          </Box>

          <CardBtn style={style} />
        </Box>
      </CardWrapper>
    </>
  );
}

export default memo(ProductCard);
