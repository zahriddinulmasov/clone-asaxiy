import { useDispatch, useSelector } from "react-redux";
import { mainInfoActions } from "../../store/commonData";
import { CardBtn } from "../../components/cardBtn/cardBtn";

import {
  FavoriteBrend,
  FavoriteBtnWrapper,
  FavoriteImg,
  FavoriteImgWrapper,
  FavoriteInternalWrapper,
  FavoriteLeft,
  FavoriteLeftLink,
  FavoriteLeftPrice,
  FavoriteLeftRight,
  FavoriteLeftSalesPrice,
  FavoriteLeftTitle,
  FavoriteLeftWrapper,
  FavoriteNoFavorite,
  FavoriteNoFavoriteImg,
  FavoriteTitle,
  FavoriteWrapper,
} from "./favoriteCart.styles";

import { Box } from "@mui/material";
import noFavorite from "../../assets/images/heart-bubble.svg";

const style_add = {
  height: "20px",
  maxWidth: "285px",
  title: "Добавить в корзину",
  backgroundColor: "#008dff",
  color: "#fff",
};

const style_delete = {
  height: "20px",
  maxWidth: "285px",
  title: "Удалить",
  backgroundColor: "#fe7300",
  color: "#fff",
};

export const FavoriteCart = () => {
  const dispatch = useDispatch();

  let basketProducts = JSON.parse(window.localStorage.getItem("basket")) || [];
  let heartProducts = JSON.parse(window.localStorage.getItem("heart")) || [];

  let selectorBasket =
    useSelector((state) => state.commonInfo.basket) !== null
      ? basketProducts
      : [];

  let selectorHeart =
    useSelector((state) => state.commonInfo.heart) !== null
      ? heartProducts
      : [];

  function handleAdd(evt) {
    const currentProduct = selectorHeart.find(
      (item) => item.id === evt.target.id * 1
    );


    if (selectorBasket.length === 0) {
      selectorBasket = [currentProduct];

      window.localStorage.setItem("basket", JSON.stringify(selectorBasket));
      dispatch(mainInfoActions.infoBasket(...selectorBasket));
    } else if (selectorBasket.length > 0) {
      const checkedCurrentProduct = selectorBasket.find(
        (item) => item.id === currentProduct.id
      );

      if (!checkedCurrentProduct) {
        selectorBasket = [...selectorBasket, currentProduct];

        window.localStorage.setItem("basket", JSON.stringify(selectorBasket));
        dispatch(mainInfoActions.infoBasket(...selectorBasket));
        console.log(checkedCurrentProduct);
      }

      if (checkedCurrentProduct) {
        const addCard = selectorBasket.filter(
          (item) => item.id !== checkedCurrentProduct.id
        );

        selectorBasket = { ...addCard };

        window.localStorage.setItem("basket", JSON.stringify(selectorBasket));
        dispatch(mainInfoActions.infoBasket(...selectorBasket));
      }
    }


    // else {

    // }
    // console.log(checkedCurrentProduct);
  }

  function handleDelete(evt) {
    const currentProduct = selectorHeart.find(
      (item) => item.id === evt.target.id * 1
    );
    const deletedCard = selectorHeart.filter(
      (item) => item.id !== currentProduct.id
    );

    if (currentProduct) {
      selectorHeart = [...deletedCard];

      window.localStorage.setItem("heart", JSON.stringify(selectorHeart));
      dispatch(mainInfoActions.infoHeart(...selectorHeart));
    }
  }

  return (
    <FavoriteWrapper>
      <FavoriteInternalWrapper>
        <FavoriteTitle>Избранное ({selectorHeart.length})</FavoriteTitle>

        {selectorHeart.length > 0 ? (
          selectorHeart.map((item) => (
            <FavoriteLeft key={item.id}>
              <FavoriteLeftWrapper>
                <FavoriteLeftLink>
                  <FavoriteImgWrapper>
                    <FavoriteImg
                      src={item.product_image[0].image}
                      height={104}
                      width={104}
                    />
                  </FavoriteImgWrapper>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Box>
                      <FavoriteLeftTitle>{item.name}</FavoriteLeftTitle>
                      <FavoriteBrend>{item.brand}</FavoriteBrend>
                    </Box>
                  </Box>
                </FavoriteLeftLink>

                <FavoriteLeftRight>
                  {item.sales_price !== item.price && (
                    <FavoriteLeftSalesPrice>
                      {item.sales_price} сум
                    </FavoriteLeftSalesPrice>
                  )}
                  <FavoriteLeftPrice>{item.price} сум</FavoriteLeftPrice>
                </FavoriteLeftRight>
              </FavoriteLeftWrapper>

              <FavoriteBtnWrapper>
                <CardBtn style={style_add} selected={handleAdd} id={item.id} />
                <CardBtn
                  style={style_delete}
                  selected={handleDelete}
                  id={item.id}
                />
              </FavoriteBtnWrapper>
            </FavoriteLeft>
          ))
        ) : (
          <FavoriteNoFavorite>
            <FavoriteNoFavoriteImg src={noFavorite} />
            Пока нет любимых продуктов
          </FavoriteNoFavorite>
        )}
      </FavoriteInternalWrapper>
    </FavoriteWrapper>
  );
};
