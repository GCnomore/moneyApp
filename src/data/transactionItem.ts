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
  category: string;
  isCustom?: boolean;
}

const DEFAULT_TRANSACTION_ITEMS: {
  income: ITransactionItem[];
  expense: { [key: string]: ITransactionItem[] };
} = {
  income: [
    { name: "payroll", icon: "", category: Category.INCOME },
    { name: "bonus", icon: "", category: Category.INCOME },
    { name: "gift", icon: "", category: Category.INCOME },
    { name: "side_income", icon: "", category: Category.INCOME },
    { name: "refund", icon: "", category: Category.INCOME },
    { name: "dividend", icon: "", category: Category.INCOME },
    { name: "coupon_reward", icon: "", category: Category.INCOME },
    { name: "lottery", icon: "", category: Category.INCOME },
    { name: "gamble", icon: "", category: Category.INCOME },
  ],
  expense: {
    [Category.HOUSE]: [
      { name: "house_payment", icon: "", category: Category.HOUSE },
      { name: "utility", icon: "", category: Category.HOUSE },
      { name: "laundry", icon: "", category: Category.HOUSE },
      // { name: "" },
    ],
  },
};

export default DEFAULT_TRANSACTION_ITEMS;
