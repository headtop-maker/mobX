import {runInAction, observable, makeObservable} from 'mobx';
import {getCurrentTickers} from '../../shared/api/axiosInstance';
import {TradeData} from '../../shared/types';
import {sortTickers} from '../../lib/sortTickers';

export type TTodos = {
  text: string;
  completed: boolean;
}[];

class TickersStore {
  tickers: TradeData[] = [];
  column: string[][] = [];
  intervalId: NodeJS.Timeout | null = null;
  errorMessage = '';

  constructor() {
    makeObservable(this, {
      tickers: observable,
      column: observable,
      errorMessage: observable,
    });
  }

  startPolling() {
    this.intervalId = setInterval(() => {
      this.getTickets();
    }, 5000);
  }

  stopPolling() {
    this.intervalId && clearInterval(this.intervalId);
  }

  async getTickets() {
    try {
      const {data} = await getCurrentTickers();
      if (data.data) {
        runInAction(() => {
          this.errorMessage = '';
          this.column = sortTickers(data.data);
        });
      }
    } catch (error) {
      console.log('error', error);
      this.errorMessage = error.message;
    }
  }
}

const store = new TickersStore();
export default store;
