import { IonContent, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { add } from "ionicons/icons";
import React, { ReactNode } from "react";
import { AppBar } from "../AppBar/AppBar";
import NavBar from "../NavBar/NavBar";

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
        <IonFabButton>
          <IonIcon icon={add} />
        </IonFabButton>
      </IonFab>
    </>
  );
};
