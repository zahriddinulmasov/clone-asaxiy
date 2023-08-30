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
} from "./productPage.styles";
import { Box, Rating } from "@mui/material";

import { ApiSingleProducts } from "../../API/api";
import { Comment } from "../../assets/images/icons";
import { CardBtn } from "../../components/cardBtn/cardBtn";
import { Loading } from "../../components/loading/loading";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { mainInfoActions } from "../../store/commonData";

const styleBasket = {
  padding: "20px",
  marginRight: "12px",
  height: "25px",
  title: "Add to basket",
  backgroundColor: "#fe7300",
  color: "#fff",
  icon: <ShoppingBasketIcon style={{ marginRight: "6px" }} />,
};

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

export const ProductPage = () => {
  // const [value, setValue] = useState(4);
  const dispatch = useDispatch();
  const params = useParams();

  let selector = useSelector((state) => state.commonInfo.singleData);

  // let commonData = useSelector((state) => state.commonInfo.data);
  let selectorSelected =
  useSelector((state) => state.commonInfo.basket).length > 0 || basketArr;
  console.log(selectorSelected[0]);

  const handleBasket = (evt) => {
    let count1 = 0;
    const currentData = selectorSelected.find(
      (item) => item.id === selector.id
      );

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

  return (
    <>
      <ApiSingleProducts product={params.id} />

      <Wrapper>
        {!selector.name ? (
          <Loading />
        ) : (
          <>
            <InternalWrapper>
              <ProductPageLeft>
                <SingleFavoriteBorderIcon sx={{ fontSize: "60px" }} />
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
                    id={selector.updated_year}
                  />
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
    </>
  );
};
