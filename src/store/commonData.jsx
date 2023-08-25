import { createSlice } from "@reduxjs/toolkit";

const name = "common";

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
        state.addBasket = action.payload
      }
    },
  });
