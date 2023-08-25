import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home/home";
import { ProductPage } from "../pages/productPage/productPage";
import { SingleCard } from "../pages/singleCard/singleCard";
import { LayoutMenu } from "../layoutMenu/layoutMenu";
import { FavoriteCart } from "../pages/favoriteCart/favoriteCart";

export const AppRoutes = () => {
  useSelector((state) => state.commonInfo.slug);

  const slugLocalStorage = JSON.parse(localStorage.getItem("slug"));

  return (
    <Routes>
      <Route element={<LayoutMenu />}>
        <Route path="/" element={<Home />} />
        <Route path={slugLocalStorage} element={<Home />} />

        <Route path="/products/:id" element={<ProductPage />} />

        <Route path="/product/basket" element={<SingleCard />} />
        <Route path="/product/heart" element={<FavoriteCart />} />

        <Route path={"*"} element={<h1>404 not fount</h1>} />
      </Route>
    </Routes>
  );
};
