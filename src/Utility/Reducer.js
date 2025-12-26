import { Type } from "./action.type";

export const Reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET: {

      // Check if item already exists
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );

      if (existingItem) {
      
        // Increase amount
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );

        return {
          ...state,
          basket: updatedBasket,
        };
      }


      // Add new item
      return {
        ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }],
      };
    }
case Type.REMOVE_FROM_BASKET: {
  // Find index of the item to remove
  const index = state.basket.findIndex(item => item.id === action.id);

  // Copy basket
  let newBasket = [...state.basket];

  if (index >= 0) {
    if (newBasket[index].amount > 1) {
      // Decrease amount by 1
      newBasket[index] = {
        ...newBasket[index],
        amount: newBasket[index].amount - 1
      };
    } else {
      // Remove item if amount is 1
      newBasket.splice(index, 1);
    }
  }

  return {
    ...state,
    basket: newBasket
  };
}

    default:
      return state;
  }
};
export default Reducer;