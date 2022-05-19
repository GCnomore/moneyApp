import _ from "lodash";
import { useEffect, useState } from "react";
import { RouteComponentProps, RouterProps, useLocation } from "react-router";
import { ITransactionItem } from "../../data/transactionItem";

interface AddTransactionProps extends RouteComponentProps {
  location: {
    pathname: string;
    hash: string;
    key: string;
    search: string;
    state: {
      type: string;
      item: ITransactionItem;
    };
  };
}

const AddTransaction: React.FC<AddTransactionProps> = (props) => {
  const [transactionType, setTransactionType] = useState<string>("");
  const { location } = props;

  useEffect(() => {
    if (location.state.type) {
      setTransactionType(location.state.type);
    }
  }, []);

  return (
    <div>
      <h2>Add {transactionType}</h2>
      <span>{_.upperFirst(location.state.item.name)}</span>
      <div>Date</div>
      <input placeholder="Enter amount" />
    </div>
  );
};

export default AddTransaction;
