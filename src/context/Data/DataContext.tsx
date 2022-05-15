import React, { ReactNode, useReducer } from "react";

interface DataContextProps {
  children?: ReactNode;
}



const DataContext: React.FC = ({ children }: DataContextProps) => {
  // const [state, dispatch] = contex;
  return <div>DataContext</div>;
};

export default DataContext;
