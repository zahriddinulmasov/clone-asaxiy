import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  InternalWrapper,
  ProductPageLeft,
  ProductPageImg,
  Wrapper,
  SingleFavoriteBorderIcon,
  ProductPageRight,
  ProductTitle,
  ProductComWrapper,
  ProductComLink,
  ProductComText,
  ProductCardPrice,
  ProductCardNewPrice,
  ProductBrend,
  ProductWrapperInfo,
  ProductBrendName,
  ProductBtnWrapper,
  ProductDescTitle,
  ProductDesc,
  ProductDescWrapper,
  ProductCommitTitle,
  ProductCommitInterWrapper,
  SingleFavoriteBtnIcon,
  ProductBtnLike,
  // ProductBtnImg,
  ProductBtnCount,
} from "./productPage.styles";

import { ApiSingleProducts } from "../../API/api";
import { Comment } from "../../assets/images/icons";
import { CardBtn } from "../../components/cardBtn/cardBtn";
import { Loading } from "../../components/loading/loading";
import { mainInfoActions } from "../../store/commonData";
import basket from "../../assets/images/basket.svg";
// import like from "../../assets/images/like.svg"

import ThumbUpIcon from "@mui/icons-material/ThumbUp";

import { Box, Rating } from "@mui/material";

const styleBuy = {
  padding: "20px",
  height: "25px",
  title: "Buy in 1 click",
  backgroundColor: "#fff",
  color: "#fe7300",
  borderRadius: "1px solid #fe7300",
};

const styleDesc = {
  marginBottom: "20px",
  padding: "30px",
};

let basketArr = JSON.parse(window.localStorage.getItem("basket")) || [];
let heartArr = JSON.parse(window.localStorage.getItem("heart")) || [];

export const ProductPage = () => {
  const [like, setLike] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();

  let selector = useSelector((state) => state.commonInfo.singleData);

  let selectorBasket = useSelector((state) => state.commonInfo.basket);
  let selectorHeart = useSelector((state) => state.commonInfo.heart);

  let selectorBasket2 = selectorBasket.length > 0 ? selectorBasket : basketArr;
  let selectorHeart2 = selectorHeart.length > 0 ? selectorHeart : heartArr;

  const handleHeart = (evt) => {
    let count = 0;
    const currentData = selectorHeart2.find(
      (item) => item.id === evt.target.id * 1
    );

    if (currentData) {
      selectorHeart2.forEach((item) => {
        if (item.id === currentData.id) {
          return count++;
        }
      });
    }

    if (count === 0) {
      selectorHeart2 = [selector, ...selectorHeart2];

      dispatch(mainInfoActions.infoHeart(selectorHeart2));
      window.localStorage.setItem("heart", JSON.stringify(selectorHeart2));
    } else {
      const currentSelectorHeart = selectorHeart2.filter(
        (item) => item.id !== currentData.id
      );

      console.log(currentSelectorHeart);
      selectorHeart2 = [...currentSelectorHeart];
      dispatch(mainInfoActions.infoHeart(selectorHeart2));
      window.localStorage.setItem("heart", JSON.stringify(selectorHeart2));
    }
  };

  const handleBasket = (evt) => {
    let count = 0;
    const currentData = selectorBasket2.find(
      (item) => item.id === evt.target.id * 1
    );

    if (currentData) {
      selectorBasket2.forEach((item) => {
        if (item.id === currentData.id) {
          return count++;
        }
      });
    }

    if (count === 0) {
      selectorBasket2 = [selector, ...selectorBasket2];

      dispatch(mainInfoActions.infoBasket(selectorBasket2));
      window.localStorage.setItem("basket", JSON.stringify(selectorBasket2));
    } else {
      const currentSelectorBasket = selectorBasket2.filter(
        (item) => item.id !== currentData.id
      );

      selectorBasket2 = [...currentSelectorBasket];
      dispatch(mainInfoActions.infoBasket(selectorBasket2));
      window.localStorage.setItem("basket", JSON.stringify(selectorBasket2));
    }
  };

  const styleBasket = {
    padding: "20px",
    marginRight: "12px",
    height: "25px",
    title: "Add to basket",
    backgroundColor: "#fe7300",
    color: "#fff",
    img: basket,
    id: selector.id,
  };

  function handleLike() {
    setLike(like + 1)
  }

  return (
    <Box sx={{ backgroundColor: "#f4f7fd" }}>
      <ApiSingleProducts product={params.id} />

      <Wrapper>
        {!selector.name ? (
          <Loading />
        ) : (
          <>
            <InternalWrapper>
              <ProductPageLeft>
                <SingleFavoriteBtnIcon
                  onClick={(evt) => handleHeart(evt)}
                  id={selector.id}
                >
                  <SingleFavoriteBorderIcon
                    sx={{ fontSize: "60px" }}
                    id={selector.id}
                  />
                </SingleFavoriteBtnIcon>

                <ProductPageImg
                  src={`https://onlineshopuchun.pythonanywhere.com/media/${selector.images}`}
                  width="370"
                  height="370"
                />
              </ProductPageLeft>

              <ProductPageRight>
                <ProductTitle>{selector.name}</ProductTitle>

                <ProductComWrapper>
                  <Rating
                    name="half-rating"
                    precision={0.5}
                    value={selector?.ratings[0]?.average_rating || 3}
                    readOnly
                    sx={{ color: "#008dff" }}
                    // onChange={(event, newValue) => {
                    //   setValue(newValue);
                    // }}
                    size="small"
                  />

                  <ProductComLink>
                    <Comment />
                    <ProductComText>0 reviews</ProductComText>
                  </ProductComLink>
                </ProductComWrapper>
                <Box>
                  <ProductCardPrice>
                    {selector.price !== selector.sales_price
                      ? selector.price
                      : null}
                  </ProductCardPrice>

                  <ProductCardNewPrice>
                    {selector.sales_price}
                  </ProductCardNewPrice>
                </Box>

                <ProductWrapperInfo>
                  <ProductBrend>
                    Brend:{" "}
                    <ProductBrendName>
                      {selector.brand || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    RAM:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.RAM
                        ? `${selector.attributes[0]?.RAM} GB`
                        : "Нет информации"}
                      {selector.attributes[0]?.RAM}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    ROM:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.ROM || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Сеть:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.aloqa || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Дисплей:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.display || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Мощность:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.quvvati || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    SIM:{" "}
                    <ProductBrendName>
                      {selector.attributes[0]?.sim || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>
                </ProductWrapperInfo>

                <ProductBtnWrapper>
                  <CardBtn
                    style={styleBasket}
                    selected={(evt) => handleBasket(evt)}
                    id={selector.id}
                  />
                  <CardBtn style={styleBuy} />

                  <ProductBtnLike onClick={handleLike}>
                    {/* <ThumbUpIcon src={like} alt="photo like icon" width={22} /> */}
                    <ThumbUpIcon sx={{ mr: "6px" }} />Я рекомендую
                    <ProductBtnCount>{like}</ProductBtnCount>
                  </ProductBtnLike>
                </ProductBtnWrapper>
              </ProductPageRight>
            </InternalWrapper>

            <ProductDescWrapper styles={styleDesc}>
              <ProductDescTitle>Описание товара</ProductDescTitle>
              <ProductDesc fontFamily="600">{selector.name}</ProductDesc>
              <ProductDesc>
                {selector.description} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Totam perferendis voluptatum eius, blanditiis
                dolores et aliquid dolorum nulla? Dolorum, esse magnam quod
                repellendus debitis a numquam voluptatibus cum quo, voluptates
                optio ipsum assumenda id sequi cupiditate beatae aut distinctio
                suscipit nulla rerum. Eligendi officia eos sapiente earum iste
                labore fugit accusamus, quod nam, similique quas repudiandae
                magnam ab. Tenetur optio nostrum suscipit. Iure maiores numquam
                tempore sapiente, magnam harum voluptates incidunt nobis tenetur
                esse corrupti voluptatibus consequatur a iste optio fugiat
                voluptatum maxime illum quis voluptate consectetur ea suscipit.
                Quod debitis vel unde ullam doloribus, tenetur exercitationem
                nobis ab voluptatum?
              </ProductDesc>
            </ProductDescWrapper>
            <ProductDescWrapper>
              <ProductDescTitle>Отзывы</ProductDescTitle>
              <ProductCommitInterWrapper>
                <ProductCommitTitle>Djon Doe</ProductCommitTitle>

                <Rating
                  name="half-rating"
                  precision={0.5}
                  value={selector?.ratings[0]?.average_rating || 3}
                  readOnly
                  sx={{ color: "#008dff", marginBottom: "12px" }}
                  // onChange={(event, newValue) => {
                  //   setValue(newValue);
                  // }}
                  size="small"
                />

                <ProductDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium quasi quibusdam eaque odit rem libero culpa
                  aspernatur quo officia commodi.
                </ProductDesc>
              </ProductCommitInterWrapper>
            </ProductDescWrapper>
          </>
        )}
      </Wrapper>
    </Box>
  );
};
