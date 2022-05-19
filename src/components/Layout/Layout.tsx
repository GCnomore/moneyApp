import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { ReactNode } from "react";
import { useHistory } from "react-router";

import { AppBar } from "../AppBar/AppBar";
import NavBar from "../NavBar/NavBar";
import * as Styled from "./Layout.styled";

interface ILayout {
  children?: ReactNode;
}

export const Layout: React.FC = ({ children }: ILayout) => {
  const history = useHistory();

  const routeToAddExpense = () => history.push("/addExpense");
  const routeToAddIncome = () => history.push("/addIncome");

  return (
    <>
      <AppBar />
      <IonContent>{children}</IonContent>
      <NavBar />
      <IonFab
        vertical="bottom"
        horizontal="end"
        slot="fixed"
        style={{ bottom: "70px", right: "20px" }}
      >
        <IonFabButton id="action-btn">
          <IonIcon icon={add} />
        </IonFabButton>
        <Styled.PopOver
          trigger="action-btn"
          side="left"
          alignment="start"
          translucent
          dismissOnSelect
        >
          <Styled.PopOverContent onClick={routeToAddExpense}>
            Add Expense
          </Styled.PopOverContent>
          <Styled.PopOverContent onClick={routeToAddIncome}>
            Add Income
          </Styled.PopOverContent>
        </Styled.PopOver>
      </IonFab>
    </>
  );
};
