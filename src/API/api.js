import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { mainInfoActions } from "../store/commonData";
import { Example } from "./example";

import {ReactQueryDevtools} from "react-query/devtools"

const queryClient = new QueryClient();

export const ExampleApp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </>
  );
};

function ApiCategory() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://onlineshopuchun.pythonanywhere.com/uz/category")
      .then((data) => {
        dispatch(mainInfoActions.infoCategory(data.data));
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, []);

  return;
  // (
  // );
}

function ApiGetProducts({ location }) {
  const dispatch = useDispatch();
  const locationDaleteSymbol = location.split("/");
  const locationFilter = locationDaleteSymbol[locationDaleteSymbol.length - 1];

  const productCat =
    locationFilter.length > 1
      ? `category/${locationFilter}/products`
      : `products`;

  useEffect(() => {
    axios
      .get(`https://onlineshopuchun.pythonanywhere.com/uz/${productCat}`)
      .then((data) => {
        dispatch(mainInfoActions.dataCategory(data.data.results));
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [locationFilter]);

  return;
}

function ApiSingleProducts({ product }) {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://onlineshopuchun.pythonanywhere.com/uz/products/${product}`)
      .then((data) => {
        console.log(data.data);
        dispatch(mainInfoActions.infoSingleData(data.data));
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [product]);

  return;
}

export { ApiCategory, ApiGetProducts, ApiSingleProducts };
