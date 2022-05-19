import { IonContent } from "@ionic/react";
import react, { useEffect, useState } from "react";
import { RouteComponentProps, useHistory, useLocation } from "react-router";
import DEFAULT_TRANSACTION_ITEMS, {
  ITransactionItem,
} from "../../data/transactionItem";

interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const SelectTransaction: React.FC<UserDetailPageProps> = ({ match }) => {
  const [_type, _setType] = useState<string>("");
  const history = useHistory();

  useEffect(() => {
    match.path.includes("addIncome") ? _setType("income") : _setType("expense");
  }, []);

  const handleIncomeClick = (item: ITransactionItem): void => {
    history.push("/addTransaction", { type: "income", item });
  };

  const handleExpenseClick = (): void => {
    history.push("/addTransaction", { type: "expense" });
  };

  if (_type === "income") {
    return (
      <div>
        {DEFAULT_TRANSACTION_ITEMS.income.map((item) => (
          <div
            onClick={() => handleIncomeClick(item)}
            key={`income-${item.name}`}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  } else {
    return <div>expnse</div>;
  }
};

export default SelectTransaction;
