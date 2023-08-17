import { memo } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { HomeInternalWrapper, HomeWrapper } from "./home.styles";

import { ApiGetProducts } from "../../API/api";
import ProductCard from "../../components/productCard/productCard";
import { Loading } from "../../components/loading/loading";

import { Box } from "@mui/material";

export const Home = () => {
  let products = useSelector((state) => state.commonInfo.data);
  const location = useLocation();

  return (
    <HomeWrapper>
      {products.length ? (
        <HomeInternalWrapper>
          {products.map((item) => (
            <ProductCard props={item} key={item.id} />
          ))}
        </HomeInternalWrapper>
      ) : (
        <Box>
          <Loading />
        </Box>
      )}

      <ApiGetProducts location={location.pathname} />
    </HomeWrapper>
  );
};

export default memo(Home);
