export enum actionTypes {
  ADD_TO_BASKET = "ADD_TO_BASKET",
  DELETE_FROM_BASKET = "DELETE_FROM_BASKET",
  SET_USER = "SET_USER",
  EMPTY_BASKET = "EMPTY_BASKET",
  SET_SHIPPINGDATA = "SET_SHIPPINGDATA",
  SET_PAYMENT_MESSAGE = "SET_PAYMENT_MESSAGE",
  INCREASE_QUANTITY_ITEM = "INCREASE_QUANTITY_ITEM",
  DECREASE_QUANTITY_ITEM = "DECREASE_QUANTITY_ITEM",
}

export interface IItem {
  id: number;
  name: string;
  productType: string;
  price: number;
  rating: number;
  quantity: number;
  image: string;
  decriptionProd: string;
}

export interface IInitialState {
  basket: IItem[];
  user: IUser | null;
  shipingData: {};
  paymentMessage: string;
}



export interface IUser {
  email: string | null;
}

export interface IShipingData {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  city: string;
  postcode: string;
}