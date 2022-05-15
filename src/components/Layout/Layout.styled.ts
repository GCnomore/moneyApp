import { IonPopover } from "@ionic/react";
import styled from "styled-components";

export const PopOver = styled(IonPopover)`
  --offset-y: -5%;
  --offset-x: -5%;
  --width: fit-content;
  --background: transparent;
  --box-shadow: none;
`;

export const PopOverContent = styled.a`
  margin: 0.25rem;
  padding: 0.75rem 1rem;
  background-color: white;
  border-radius: 30px;
  text-decoration: none;
  color: black;
`;
