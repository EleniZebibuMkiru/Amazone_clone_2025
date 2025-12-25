import { Type } from "./action.type";

const Reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case Type.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.filter((item, index) => index !== action.index),
      };

    default:
      return state;
  }
};

export default Reducer;
