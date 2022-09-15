interface FundCommonProps {
  price: number;
}

export interface Fund extends FundCommonProps {
  symbol: string;
  performance: number;
  date_time: string | Date;
  history?: HistoryFund[];
}

export interface HistoryFund extends FundCommonProps {
  date: string | Date;
}
