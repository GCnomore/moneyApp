export interface IData {}

interface ITransaction {
  amount: number;
  icon: string;
  note: string;
  period: string;
}

enum IPeriod {
  YEAR = "annual",
  MONTH = "monthly",
  BIWEEK = "biweekly",
  WEEK = "weekly",
  DAY = "daily",
  NO = "unset",
}
