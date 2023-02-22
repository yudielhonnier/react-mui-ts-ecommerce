import { IItem, IUser, IShipingData, IInitialState } from "./reducer.types";

export const getBasketTotal = (basket: IItem[]) => {
  return basket?.reduce(
    (amount, item: IItem) => item.price * item.quantity + amount,
    0
  );
};

export const getTotalItems = (basket: IItem[]) => {
  return basket?.reduce((acc, { quantity }) => acc + quantity, 0);
};

export const initialState: IInitialState = {
  basket: [],
  user: null,
  shipingData: {},
  paymentMessage: "",
};

export type AppState = typeof initialState;
export type Action =
  | { type: "ADD_TO_BASKET"; item: IItem }
  | { type: "INCREASE_QUANTITY_ITEM"; item: IItem }
  | { type: "DECREASE_QUANTITY_ITEM"; item: IItem }
  | { type: "DELETE_FROM_BASKET"; item: IItem }
  | { type: "SET_USER"; user: IUser | null }
  | { type: "EMPTY_BASKET"; basket: IItem[] }
  | { type: "SET_SHIPPINGDATA"; shipingData: IShipingData }
  | { type: "SET_PAYMENT_MESSAGE"; paymentMessage: string };

const reducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "INCREASE_QUANTITY_ITEM":
      let basketToInc = [...state.basket];
      basketToInc.map((item: IItem) => {
        // TODO:analize this action.item.id
        if (item.id === action.item.id) {
          //TODO:reducer runs 2 times for that it added 0.5 to simulate one product
          //   analize how to solve this
          item.quantity = item.quantity + 0.5;
        }
      });
      return {
        ...state,
        basket: basketToInc,
      };
    case "DECREASE_QUANTITY_ITEM":
      let basketToDec = [...state.basket];
      basketToDec.map((item) => {
        if (item.id === action.item.id) {
          //todo:reducer runs 2 times for that it dec 0.5 to simulate one product
          //   analize how to solve this
          item.quantity = item.quantity - 0.5;
        }
      });
      return {
        ...state,
        basket: basketToDec,
      };
    case "DELETE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("cant remove product");
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: action.basket,
      };
    case "SET_SHIPPINGDATA":
      return {
        ...state,
        shipingData: action.shipingData,
      };
    case "SET_PAYMENT_MESSAGE":
      return {
        ...state,
        paymentMessage: action.paymentMessage,
      };
    default:
      return state;
  }
};

export default reducer;
