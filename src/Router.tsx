import { Redirect, Route } from "react-router";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SelectTransaction from "./pages/SelectTransaction/SelectTransaction";
import AddTransaction from "./pages/AddTransaction/AddTransaction";
import { Layout } from "./components/Layout/Layout";

export default function Router(): JSX.Element {
  return (
    <IonReactRouter basename="/moneyApp">
      <Layout>
        <IonRouterOutlet>
          {/* <Route path="/monthly" component={Home} /> */}
          <Route exact path="/moneyApp" component={Dashboard} />
          <Route path="/addIncome" component={SelectTransaction} />
          <Route path="/addExpense" component={SelectTransaction} />
          <Route path="/addTransaction" component={AddTransaction} />
          <Redirect exact from="/" to="/moneyApp" />
        </IonRouterOutlet>
      </Layout>
    </IonReactRouter>
  );
}
