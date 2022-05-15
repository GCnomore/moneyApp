enum Category {
  INCOME = "income",
  HOUSE = "house",
  TAX = "tax",
  FINE = "fine",
  CHILD = "child",
  EDUCATION = "education",
  INVESTMENT = "investment",
  WORK = "work",
  AUTOMOBILE = "automobile",
  ENTERTAINMENT = "entertainment",
  MEDICAL = "medical",
  GROCERY = "grocery",
  SOCIAL = "social",
}

interface ITransactionItem {
  name: string;
  icon: string;
  isCustom?: boolean;
}

const DEFAULT_TRANSACTION_ITEMS: {
  income: ITransactionItem[];
  expense: { [key: string]: ITransactionItem[] };
} = {
  income: [
    { name: "payroll", icon: "" },
    { name: "bonus", icon: "" },
    { name: "side_income", icon: "" },
    { name: "dividend", icon: "" },
    { name: "gift", icon: "" },
    { name: "refund", icon: "" },
    { name: "coupon_reward", icon: "" },
    { name: "lottery", icon: "" },
    { name: "gamble", icon: "" },
    { name: "etc", icon: "" },
  ],
  expense: {
    [Category.HOUSE]: [
      { name: "house_payment", icon: "" },
      { name: "utility", icon: "" },
      { name: "laundry", icon: "" },
      { name: "insurance", icon: "" },
      { name: "tax", icon: "" },
      { name: "fee", icon: "" },
      { name: "etc", icon: "" },
    ],
    [Category.ENTERTAINMENT]: [
      { name: "food", icon: "" },
      { name: "drinks", icon: "" },
      { name: "travel", icon: "" },
      { name: "shopping", icon: "" },
      { name: "fitness", icon: "" },
      { name: "game", icon: "" },
      { name: "entertainment", icon: "" },
    ],
  },
};

export default DEFAULT_TRANSACTION_ITEMS;
