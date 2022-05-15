export interface IData {
  income: any;
  expense: any;
}

export type DataActions =
  | { type: "LOGIN"; payload: any }
  | { type: "LOGOUT" }
  | { type: "REGISTER"; payload: any }
  | { type: "UNREGISTER"; payload: { userId: number } }
  | { type: "UPDATE"; payload: IData };

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

export const dataState: IData = {
  income: [],
  expense: [],

}

// export function dataReducer(state: IData, action: DataActions): IData {

// }