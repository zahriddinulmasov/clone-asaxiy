import { useDispatch, useSelector } from "react-redux";
import {
  SingleCardBrend,
  SingleCardBtnContent,
  SingleCardBtnCount1,
  SingleCardBtnCount2,
  SingleCardBtnsWrapper,
  SingleCardDalete,
  SingleCardImg,
  SingleCardImgWrapper,
  SingleCardInInternalWrapper,
  SingleCardInternalWrapper,
  SingleCardLeft,
  SingleCardLeftLeft,
  SingleCardLeftRight,
  SingleCardLeftTitle,
  SingleCardPrice,
  SingleCardRight,
  SingleCardRightPrice,
  SingleCardRightTitle,
  SingleCardTitle,
  SingleCardWrapper,
  SingleCardRightWrapper,
} from "./singleCard.styles";
import { CardBtn } from "../../components/cardBtn/cardBtn";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { mainInfoActions } from "../../store/commonData";
import { useNavigate } from "react-router-dom";

const style = {
  height: "20px",
  maxWidth: "285px",
  title: "Оформить",
  backgroundColor: "#fe7300",
  color: "#fff",
};

export const SingleCard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  let basketProducts = JSON.parse(window.localStorage.getItem("basket")) || [];

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

      if (selectorBasket.length === 0) window.localStorage.clear("basket");
    }
  }

  function clicktedCard(evt) {
    const faundData = selectorBasket.find(item => item.id === evt.target.id * 1)
    console.log(faundData);
    navigate(`/products/${faundData.slug}`)
  }

  return (
    <SingleCardWrapper>
      <SingleCardInternalWrapper>
        <SingleCardTitle>Корзинка</SingleCardTitle>

        <SingleCardInInternalWrapper>
          <Box sx={{ width: "75%" }}>
            {selectorBasket.map((item) => (
              <SingleCardLeft key={item.id}>
                <SingleCardLeftLeft onClick={clicktedCard} id={item.id}>
                  <SingleCardImgWrapper id={item.id}>
                    <SingleCardImg
                      id={item.id}
                      src={item.product_image[0].image}
                      height={104}
                    />
                  </SingleCardImgWrapper>

                  <Box  id={item.id}>
                    <SingleCardLeftTitle id={item.id}>
                      {item.name}
                    </SingleCardLeftTitle>
                    <SingleCardBrend id={item.id}>{item.brand}</SingleCardBrend>
                  </Box>
                </SingleCardLeftLeft>

                <SingleCardLeftRight>
                  <SingleCardBtnsWrapper>
                    <SingleCardBtnCount1 id={item.id}>-</SingleCardBtnCount1>
                    <SingleCardBtnContent>{1}</SingleCardBtnContent>
                    <SingleCardBtnCount2 id={item.id}>+</SingleCardBtnCount2>
                  </SingleCardBtnsWrapper>

                  <Box>
                    {item.price !== item.sales_price && (
                      <SingleCardPrice textLine="line-through" color="#fe7300">
                        {item.price} so'm
                      </SingleCardPrice>
                    )}
                    <SingleCardPrice>{item.sales_price} so'm</SingleCardPrice>
                    <SingleCardDalete
                      id={item.id}
                      onClick={(evt) => handleDelete(evt)}
                    >
                      <DeleteIcon fontSize="small" sx={{ mr: "6px" }} /> Удалить
                    </SingleCardDalete>
                  </Box>
                </SingleCardLeftRight>
              </SingleCardLeft>
            ))}
          </Box>

          <SingleCardRightWrapper>
            <SingleCardRightTitle>
              В корзине {selectorBasket.length || 0} товара
            </SingleCardRightTitle>
            <SingleCardRightTitle color="rgb(40, 40, 48)">
              Общая сумма:
            </SingleCardRightTitle>
            <SingleCardRightPrice>
              {`${commonPrice[0]} ${" "} ${commonPrice[1]} ${" "} ${
                commonPrice[2]
              }`}{" "}
              so'm
            </SingleCardRightPrice>
            <SingleCardRight />

            <CardBtn style={style} />
          </SingleCardRightWrapper>
        </SingleCardInInternalWrapper>
      </SingleCardInternalWrapper>
    </SingleCardWrapper>
  );
};
