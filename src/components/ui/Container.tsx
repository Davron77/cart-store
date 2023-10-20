import { ReactNode } from "react";

interface ContainerType {
  children: ReactNode;
}

const Container: React.FC<ContainerType> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Container;
