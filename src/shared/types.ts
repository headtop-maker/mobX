export interface IApiResponse {
  code: string;
  msg: string;
  data: TradeData[];
}

export interface TradeData {
  sequence: number;
  symbol: string;
  side: 'buy' | 'sell';
  size: number;
  price: string;
  bestBidSize: number;
  bestBidPrice: string;
  bestAskPrice: string;
  tradeId: string;
  bestAskSize: number;
  ts: number;
}

export interface ApiError {
  message: string;
  statusCode?: number;
}
