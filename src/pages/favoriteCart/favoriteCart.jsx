import { useDispatch, useSelector } from "react-redux";

import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { mainInfoActions } from "../../store/commonData";
import {
  FavoriteBrend,
  FavoriteBtnContent,
  FavoriteBtnCount1,
  FavoriteBtnCount2,
  FavoriteBtnsWrapper,
  FavoriteDalete,
  FavoriteImg,
  FavoriteImgWrapper,
  FavoriteInInternalWrapper,
  FavoriteInternalWrapper,
  FavoriteLeft,
  FavoriteLeftLeft,
  FavoriteLeftRight,
  FavoriteLeftTitle,
  FavoritePrice,
  FavoriteTitle,
  FavoriteWrapper,
} from "./favoriteCart.styles";

export const FavoriteCart = () => {
  const dispatch = useDispatch();

  let basketProducts = JSON.parse(window.localStorage.getItem("basket")) || [];
  const heartProducts = JSON.parse(window.localStorage.getItem("heart")) || [];

  let selectorBasket =
    useSelector((state) => state.commonInfo.basket) !== null
      ? basketProducts
      : [];

  let totalPriceBasket = selectorBasket.reduce(
    (acc, item) => acc + item.sales_price,
    0
  );

  let totalPrice = [...totalPriceBasket.toString()];
  let commonPrice = [
    totalPrice.slice(0, totalPrice.length - 6).join(""),
    totalPrice.slice(totalPrice.length - 6, totalPrice.length - 3).join(""),
    totalPrice.slice(totalPrice.length - 3, totalPrice.length).join(""),
  ];

  function handleDelete(evt) {
    const currentProduct = selectorBasket.find(
      (item) => item.id === evt.target.id * 1
    );
    const deletedCard = selectorBasket.filter(
      (item) => item.id !== currentProduct.id
    );

    if (currentProduct) {
      selectorBasket = [...deletedCard];

      window.localStorage.setItem("basket", JSON.stringify(selectorBasket));
      dispatch(mainInfoActions.infoBasket(...selectorBasket));
    }
  }

  let selectorHeart =
    useSelector((state) => state.commonInfo.heart) !== null
      ? heartProducts
      : [];

  let totalPriceHeart = selectorHeart.reduce(
    (acc, item) => acc + item.sales_price,
    0
  );

  return (
    <FavoriteWrapper>
      <FavoriteInternalWrapper>
        <FavoriteTitle>Избранное</FavoriteTitle>

        <FavoriteInInternalWrapper>
          <Box sx={{ width: "75%" }}>
            {selectorBasket.map((item) => (
              <FavoriteLeft key={item.id}>
                <FavoriteLeftLeft>
                  <FavoriteImgWrapper>
                    <FavoriteImg
                      src={item.product_image[0].image}
                      height={104}
                    />
                  </FavoriteImgWrapper>

                  <Box>
                    <FavoriteLeftTitle>{item.name}</FavoriteLeftTitle>
                    <FavoriteBrend>{item.brand}</FavoriteBrend>
                  </Box>
                </FavoriteLeftLeft>

                <FavoriteLeftRight>
                  <FavoriteBtnsWrapper>
                    <FavoriteBtnCount1 id={item.id}>-</FavoriteBtnCount1>
                    <FavoriteBtnContent>{1}</FavoriteBtnContent>
                    <FavoriteBtnCount2 id={item.id}>+</FavoriteBtnCount2>
                  </FavoriteBtnsWrapper>

                  <Box>
                    {item.price !== item.sales_price && (
                      <FavoritePrice textLine="line-through" color="#fe7300">
                        {item.price} so'm
                      </FavoritePrice>
                    )}
                    <FavoritePrice>{item.sales_price} so'm</FavoritePrice>
                    <FavoriteDalete
                      id={item.id}
                      onClick={(evt) => handleDelete(evt)}
                    >
                      <DeleteIcon fontSize="small" sx={{ mr: "6px" }} /> Удалить
                    </FavoriteDalete>
                  </Box>
                </FavoriteLeftRight>
              </FavoriteLeft>
            ))}
          </Box>
        </FavoriteInInternalWrapper>
      </FavoriteInternalWrapper>
    </FavoriteWrapper>
  );
};
