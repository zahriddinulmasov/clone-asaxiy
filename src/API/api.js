import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mainInfoActions } from "../store/commonData";


function ApiCategory() {
  const dispatch = useDispatch();
  const selector =
    useSelector((state) => state.commonInfo.language);

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
  const searchSelector = useSelector(state => state.commonInfo.search)

  const locationDaleteSymbol = location.split("/");
  const locationFilter = locationDaleteSymbol[locationDaleteSymbol.length - 1];

  const productCat =
  locationFilter.length > 1
  ? `category/${locationFilter}/products`
  : `products${searchSelector ? `/?search=${searchSelector}` : ""}`;

  useEffect(() => {
    axios(
      `https://onlineshopuchun.pythonanywhere.com/${selector}/${productCat}`
    )
      .then((data) => {
        dispatch(mainInfoActions.dataCategory(data.data.results));
      })
      .catch((error) => console.log(error));

    // eslint-disable-next-line
  }, [productCat, selector]);

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
