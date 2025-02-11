import {TradeData} from '../shared/types';

const col = ['symbol', 'price', 'bestBidPrice', 'bestAskPrice', 'bestAskSize'];

export const sortTickers = (currentTickers: TradeData[]) => {
  const arrays = [];

  for (let key of col) {
    const columnValue = currentTickers.map(item => String(item[key]));
    columnValue.unshift(key);
    arrays.push(columnValue);
  }
  console.log('arrays', arrays);
  return arrays;
};
