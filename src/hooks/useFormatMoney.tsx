import { FormatMoney } from 'format-money-js';

const useFormatMoney = (price: number, symbol: string) => {
  const fm = new FormatMoney({ decimals: 2 });
  return fm.from(price, { symbol: symbol }) as string;
};

export default useFormatMoney;
