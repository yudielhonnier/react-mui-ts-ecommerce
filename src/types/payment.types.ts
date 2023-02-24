import { PaymentMethod, StripeError } from "@stripe/stripe-js";

//TODO: MOVE THIS TO CORRECTLY PAGE

export interface IPaymentFunctions {
  handleNext: () => void;
  handleBack: () => void;
}

export interface IPaymentMethod {
  error?: StripeError | undefined;
  paymentMethod?: PaymentMethod | undefined;

}

export interface IAddressInputProps {
  name:string;
  label:string;
  required:boolean;
}