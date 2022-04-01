import React from "react";
import { IonContent } from "@ionic/react";
import {
  VictoryLabel,
  VictoryLabelProps,
  VictoryPie,
  VictoryPieProps,
  VictoryTooltip,
} from "victory";

import * as Styled from "./Dashboard_Styled";

const Dashboard = () => {
  return (
    <IonContent
      scrollEvents={true}
      onIonScrollStart={() => {}}
      onIonScroll={() => {}}
      onIonScrollEnd={() => {}}
      className="ion-padding"
    >
      <Styled.SummarySection>
        <div>
          <span>$12,000</span>
          <span>Total income</span>
        </div>
        <div>
          <span>$5,600</span>
          <span>Total expense</span>
        </div>
        <div>
          <span>${12000 - 5600}</span>
          <span>Balance</span>
        </div>
      </Styled.SummarySection>
      <Styled.AdContainer1>ad</Styled.AdContainer1>
      <Styled.ChartSection>
        <div>
          <div>
            <VictoryPie
              style={{ labels: { fill: "white" } }}
              labelRadius={100}
              labels={({ datum }) => `# ${datum.y}`}
              // labelComponent={<CustomLabel />}
              data={[
                { x: 1, y: 5 },
                { x: 2, y: 4 },
                { x: 3, y: 2 },
                { x: 4, y: 3 },
                { x: 5, y: 1 },
              ]}
            />
          </div>
          <div>Chart description</div>
        </div>
        <div></div>
      </Styled.ChartSection>
      <Styled.AdContainer2>ad</Styled.AdContainer2>
      <Styled.TransactionContainer>trans</Styled.TransactionContainer>
    </IonContent>
  );
};

export default Dashboard;

const CustomLabel: any = (props: any) => {
  return (
    <g>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={200}
        y={250}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{ fill: "black" }}
      />
    </g>
  );
};

CustomLabel.defaultEvents = VictoryTooltip.defaultEvents;
