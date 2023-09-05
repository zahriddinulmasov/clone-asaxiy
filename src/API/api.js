import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainInfoActions } from "../store/commonData";

const language = JSON.parse(window.localStorage.getItem("lang"));

function ApiCategory() {
  const dispatch = useDispatch();
  const selector =
    useSelector((state) => state.commonInfo.language);
  console.log(selector);
  console.log(language);

  useEffect(() => {
    axios(`https://onlineshopuchun.pythonanywhere.com/${selector}/category`)
      .then((data) => {
        dispatch(mainInfoActions.infoCategory(data.data));
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line
  }, [selector]);

  return;
}

function ApiGetProducts({ location }) {
  const dispatch = useDispatch();
  const selector =
    useSelector((state) => state.commonInfo.language)

  const locationDaleteSymbol = location.split("/");
  const locationFilter = locationDaleteSymbol[locationDaleteSymbol.length - 1];

  const productCat =
    locationFilter.length > 1
      ? `category/${locationFilter}/products`
      : `products`;

  useEffect(() => {
    axios(
      `https://onlineshopuchun.pythonanywhere.com/${selector}/${productCat}`
    )
      .then((data) => {
        dispatch(mainInfoActions.dataCategory(data.data.results));
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [locationFilter, selector]);

  return;
}

function ApiSingleProducts({ product }) {
  const dispatch = useDispatch();
  const selector =
    useSelector((state) => state.commonInfo.language)

  useEffect(() => {
    axios(
      `https://onlineshopuchun.pythonanywhere.com/${selector}/products/${product}`
    )
      .then((data) => {
        console.log(data.data);
        dispatch(mainInfoActions.infoSingleData(data.data));
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [product, selector]);

  return;
}

export { ApiCategory, ApiGetProducts, ApiSingleProducts };
