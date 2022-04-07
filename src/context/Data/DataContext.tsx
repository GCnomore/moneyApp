import React, { ReactNode } from "react";

interface DataContextProps {
  children?: ReactNode;
}

const DataContext: React.FC = ({ children }: DataContextProps) => {
  return <div>DataContext</div>;
};

export default DataContext;
