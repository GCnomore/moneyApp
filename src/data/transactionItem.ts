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
    { name: "general", icon: "" },
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
    [Category.CHILD]: [
      { name: "care", icon: "" },
      { name: "food", icon: "" },
      { name: "school", icon: "" },
      { name: "activities", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.AUTOMOBILE]: [
      { name: "fuel", icon: "" },
      { name: "maintenance", icon: "" },
      { name: "repair", icon: "" },
      { name: "insurance", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.GROCERY]: [{ name: "grocery", icon: "" }],
    [Category.EDUCATION]: [
      { name: "tuition", icon: "" },
      { name: "books", icon: "" },
      { name: "equipments", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.WORK]: [
      { name: "lease", icon: "" },
      { name: "travel", icon: "" },
      { name: "equipments", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.MEDICAL]: [
      { name: "hospital", icon: "" },
      { name: "medicine", icon: "" },
      { name: "insurance", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.INVESTMENT]: [
      { name: "stock", icon: "" },
      { name: "crypto", icon: "" },
      { name: "real_estate", icon: "" },
      { name: "alternative_investments", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.SOCIAL]: [
      { name: "birthday", icon: "" },
      { name: "anniversary", icon: "" },
      { name: "wedding", icon: "" },
      { name: "celebration", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.FINE]: [
      { name: "traffic", icon: "" },
      { name: "court", icon: "" },
      { name: "general", icon: "" },
    ],
    [Category.TAX]: [{ name: "tax", icon: "" }],
  },
};

export default DEFAULT_TRANSACTION_ITEMS;
