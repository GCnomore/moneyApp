import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { ReactNode } from "react";

import { AppBar } from "../AppBar/AppBar";
import NavBar from "../NavBar/NavBar";
import * as Styled from "./Layout.styled";

interface ILayout {
  children?: ReactNode;
}

export const Layout: React.FC = ({ children }: ILayout) => {
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
          <Styled.PopOverContent href="/moneyApp/addIncome">
            Add Income
          </Styled.PopOverContent>
          <Styled.PopOverContent href="/moneyApp/addExpense">
            Add Expense
          </Styled.PopOverContent>
        </Styled.PopOver>
      </IonFab>
    </>
  );
};
