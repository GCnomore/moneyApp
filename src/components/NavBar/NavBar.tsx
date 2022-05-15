import React, { useEffect, useState } from "react";
import {
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonBadge,
} from "@ionic/react";
import { calendar, personCircle, map, informationCircle } from "ionicons/icons";

const NavBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="dashboard" href="/moneyApp">
        <IonIcon icon={personCircle} />
        <IonLabel>Dashboard</IonLabel>
      </IonTabButton>
      <IonTabButton tab="home" href="/moneyApp/monthly">
        <IonIcon icon={calendar} />
        <IonLabel>Monthly</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map" href="/moneyApp/annual">
        <IonIcon icon={map} />
        <IonLabel>Annual</IonLabel>
      </IonTabButton>

      <IonTabButton tab="about" href="/moneyApp/about">
        <IonIcon icon={informationCircle} />
        <IonLabel>About</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};

export default NavBar;
