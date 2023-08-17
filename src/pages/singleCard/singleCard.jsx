import { useSelector } from "react-redux";
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
  SinglecardRight,
} from "./singleCard.styles";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CardBtn } from "../../components/cardBtn/cardBtn";
import { useState } from "react";
import { ExampleApp } from "../../API/api";

const style = {
  height: "20px",
  maxWidth: "285px",
  title: "Оформить",
  backgroundColor: "#fe7300",
  color: "#fff",
};

export const SingleCard = () => {
  const [count, setCount] = useState([]);
  console.log(count);

  const basketProducts =
    JSON.parse(window.localStorage.getItem("basket")) || [];
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

  let aaa;
  function handleIncrement(evt) {
    const selectedData = selectorBasket.find(
      (item) => item.id === evt.target.id * 1
    );

    aaa = {
      name: selectedData.name,
      total: count + 1,
    };
    console.log(selectedData);
    setCount(aaa);
  }

  let selectorHeart =
    useSelector((state) => state.commonInfo.heart) !== null
      ? heartProducts
      : [];

  return (
    <SingleCardWrapper>
      <SingleCardInternalWrapper>
        <SingleCardTitle>Корзинка</SingleCardTitle>

        <SingleCardInInternalWrapper>
          <Box sx={{ width: "75%" }}>
            {selectorBasket.map((item) => (
              <SingleCardLeft key={item.id}>
                <SingleCardLeftLeft>
                  <SingleCardImgWrapper>
                    <SingleCardImg
                      src={item.product_image[0].image}
                      height={104}
                    />
                  </SingleCardImgWrapper>

                  <Box>
                    <SingleCardLeftTitle>{item.name}</SingleCardLeftTitle>
                    <SingleCardBrend>{item.brand}</SingleCardBrend>
                  </Box>
                </SingleCardLeftLeft>
                <SingleCardLeftRight>
                  <SingleCardBtnsWrapper>
                    <SingleCardBtnCount1
                      id={item.id}
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </SingleCardBtnCount1>
                    <SingleCardBtnContent>{2}</SingleCardBtnContent>
                    <SingleCardBtnCount2 id={item.id} onClick={handleIncrement}>
                      +
                    </SingleCardBtnCount2>
                  </SingleCardBtnsWrapper>

                  <Box>
                    {item.price !== item.sales_price && (
                      <SingleCardPrice textLine="line-through" color="#fe7300">
                        {item.price} so'm
                      </SingleCardPrice>
                    )}
                    <SingleCardPrice>{item.sales_price} so'm</SingleCardPrice>
                    <SingleCardDalete>
                      <DeleteIcon fontSize="small" sx={{ mr: "6px" }} /> Удалить
                    </SingleCardDalete>
                  </Box>
                </SingleCardLeftRight>
              </SingleCardLeft>
            ))}
          </Box>

          <SinglecardRight>
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
          </SinglecardRight>
        </SingleCardInInternalWrapper>
      </SingleCardInternalWrapper>

      <ExampleApp/>
    </SingleCardWrapper>
  );
};
