import { IonContent } from "@ionic/react";
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
    </>
  );
};
