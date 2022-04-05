import styled from "styled-components";

const padding = "0.5rem 1rem";
const margin = "1rem 0";
const borderRadius = "0.5rem";

export const SummarySection = styled.section`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  padding: ${padding};
  margin: ${margin};
  margin-top: 0px;
  border-radius: ${borderRadius};

  div {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 30%;
  }
`;

export const AdContainer1 = styled.section`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  height: 5rem;
  padding: ${padding};
  margin: ${margin};
  border-radius: ${borderRadius};
`;

export const ChartSection = styled.section`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 15rem;
  padding: ${padding};
  margin: ${margin};
  border-radius: ${borderRadius};

  > div:first-child {
    display: flex;
    position: relative;
    width: 100%;
    height: 70%;

    > div:first-child {
      width: 18rem;
      margin-left: -1rem;
      margin-top: -1rem;
    }

    > div:last-child {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  > div:last-child {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const AdContainer2 = styled(AdContainer1)`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  padding: ${padding};
  margin: ${margin};
  border-radius: ${borderRadius};
`;

export const TransactionContainer = styled.section`
  width: 100%;
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  padding: ${padding};
  margin: ${margin};
  border-radius: ${borderRadius};
`;
