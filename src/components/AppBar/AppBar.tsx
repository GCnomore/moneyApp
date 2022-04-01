import React from "react";
import {
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
} from "@ionic/react";
import {
  personCircle,
  ellipsisHorizontal,
  ellipsisVertical,
  chevronDownOutline,
} from "ionicons/icons";

export const AppBar: React.FC = () => (
  <IonToolbar color="tertiary" slot="top">
    <IonButtons slot="start">
      <IonButton>
        <IonIcon slot="icon-only" icon={personCircle} />
      </IonButton>
    </IonButtons>
    <IonButtons slot="primary">
      <IonButton color="light">
        <IonIcon
          slot="icon-only"
          ios={ellipsisHorizontal}
          md={ellipsisVertical}
        />
      </IonButton>
    </IonButtons>
    <IonTitle>
      Month
      <IonIcon icon={chevronDownOutline} />
    </IonTitle>
  </IonToolbar>
);
