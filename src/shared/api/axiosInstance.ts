import axios, {AxiosResponse} from 'axios';
import {ApiError, IApiResponse} from '../types';

export const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getCurrentTickers = (): Promise<
  AxiosResponse<IApiResponse, ApiError>
> =>
  instance({
    timeout: 3000,
    method: 'get',
    url: 'https://futures-api.poloniex.com/api/v2/tickers',
  });
