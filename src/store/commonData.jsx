import { createSlice } from "@reduxjs/toolkit";

const name = "common";

const language = JSON.parse(window.localStorage.getItem("lang"));

const initialState = {
  error: null,
  info: [],
  data: [],
  slug: "",
  isBtn: false,
  singleData: {},
  basket: [],
  heart: [],
  addBasket: null,
  language: language,
  search: "",
};

export const { reducer: mainInfoReducer, actions: mainInfoActions } =
  createSlice({
    name,
    initialState,
    reducers: {
      infoCategory(state, action) {
        state.info = action.payload;
      },
      dataCategory(state, action) {
        state.data = action.payload;
      },
      dataSlug(state, action) {
        state.slug = action.payload;
      },
      navIsBtn(state, action) {
        state.isBtn = action.payload;
      },
      infoSingleData(state, action) {
        state.singleData = action.payload;
      },
      infoBasket(state, action) {
        state.basket = action.payload;
      },
      infoHeart(state, action) {
        state.heart = action.payload;
      },
      addedBasket(state, action) {
        state.addBasket = action.payload;
      },
      replacedLang(state, action) {
        state.language = action.payload;
      },
      mainSearch(state, action) {
        state.search = action.payload;
      },
    },
  });
