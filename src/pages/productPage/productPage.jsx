import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

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
} from "./productPage.styles";
import { Box, Rating } from "@mui/material";

import { ApiSingleProducts } from "../../API/api";
import { Comment } from "../../assets/images/icons";
import { CardBtn } from "../../components/cardBtn/cardBtn";
import { Loading } from "../../components/loading/loading";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const styleBasket = {
  marginRight: "12px",
  height: "25px",
  title: "Add to basket",
  backgroundColor: "#fe7300",
  color: "#fff",
  icon: <ShoppingBasketIcon style={{ marginRight: "6px" }} />,
};

const styleBuy = {
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

export const ProductPage = () => {
  // const [value, setValue] = useState(4);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  let selector = useSelector((state) => state.commonInfo.singleData);


  useEffect(() => {
    if (selector.name) {
      setData(selector);
      setLoading(false);
    }
  }, [selector]);

  // console.log(data.attributes);
  return (
    <>
      <ApiSingleProducts product={params.id} />

      <Wrapper>
        {" "}
        {loading ? (
          <Loading />
        ) : (
          <>
            <InternalWrapper>
              <ProductPageLeft>
                <SingleFavoriteBorderIcon sx={{ fontSize: "60px" }} />
                <ProductPageImg
                  src={`https://onlineshopuchun.pythonanywhere.com/media/${data.images}`}
                  width="370"
                  height="370"
                />
              </ProductPageLeft>

              <ProductPageRight>
                <ProductTitle>{data.name}</ProductTitle>

                <ProductComWrapper>
                  <Rating
                    name="half-rating"
                    precision={0.5}
                    value={data?.ratings[0]?.average_rating || 3}
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
                  <ProductCardPrice>{data.price}</ProductCardPrice>

                  <ProductCardNewPrice>{data.sales_price}</ProductCardNewPrice>
                </Box>

                <ProductWrapperInfo>
                  <ProductBrend>
                    Brend: <ProductBrendName>{data.brand || "Нет информации"}</ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    RAM:{" "}
                      <ProductBrendName>
                        {data.attributes[0]?.RAM ? `${data.attributes[0]?.RAM} GB` : "Нет информации"}
                      {data.attributes[0]?.RAM}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    ROM:{" "}
                    <ProductBrendName>
                        {data.attributes[0]?.ROM || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Сеть:{" "}
                    <ProductBrendName>
                      {data.attributes[0]?.aloqa || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Дисплей:{" "}
                    <ProductBrendName>
                      {data.attributes[0]?.display || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    Мощность:{" "}
                    <ProductBrendName>
                      {data.attributes[0]?.quvvati || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>

                  <ProductBrend>
                    SIM:{" "}
                    <ProductBrendName>
                      {data.attributes[0]?.sim || "Нет информации"}
                    </ProductBrendName>
                  </ProductBrend>
                </ProductWrapperInfo>

                <ProductBtnWrapper>
                  <CardBtn style={styleBasket} />
                  <CardBtn style={styleBuy} />
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
                  value={data?.ratings[0]?.average_rating || 3}
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
    </>
  );
};
