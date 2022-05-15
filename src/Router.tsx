import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import AddTransaction from "./pages/AddTransaction/AddTransaction";

export default function Router(): JSX.Element {
  return (
    <IonReactRouter basename="/moneyApp">
      <IonRouterOutlet>
        {/* <Route path="/monthly" component={Home} /> */}
        <Route exact path="/moneyApp" component={Dashboard} />
        <Route path="/addIncome" component={AddTransaction} />
        <Route path="/addExpense" component={AddTransaction} />
        <Redirect exact from="/" to="/moneyApp" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
