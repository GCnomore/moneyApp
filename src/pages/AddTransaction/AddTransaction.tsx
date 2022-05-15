import { IonContent } from "@ionic/react";
import react, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";

interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const AddTransaction: React.FC<UserDetailPageProps> = ({ match }) => {
  const [_type, _setType] = useState<string>("");

  useEffect(() => {
    match.path.includes("addIncome") ? _setType("income") : _setType("expense");
  }, []);

  if (_type === "income") {
    return <div>income</div>;
  } else {
    return <div>expnse</div>;
  }
};

export default AddTransaction;
