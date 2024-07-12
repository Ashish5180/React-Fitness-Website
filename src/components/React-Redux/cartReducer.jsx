const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.productId ? { ...item, quantity: action.payload.newQuantity } : item
        ),
      };
    default:
      return state;
  }
};

export const selectCartItems = (state) => state.cart.items;
export const selectCartItemCount = (state) => state.cart.items.length;

export default cartReducer;
