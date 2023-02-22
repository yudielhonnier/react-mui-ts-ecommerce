import { FormatMoney } from "format-money-js";

export const useFormatMoney = (price: number, symbol: string) => {
  const fm = new FormatMoney({ decimals: 2 });
  return fm.from(price, { symbol: symbol }) as string;
};
