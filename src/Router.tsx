import { Route, Redirect } from "react-router-dom";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function Router(): JSX.Element {
  return (
    <IonReactRouter basename="/moneyApp">
      <IonRouterOutlet>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect exact from="/" to="/moneyApp" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
}
