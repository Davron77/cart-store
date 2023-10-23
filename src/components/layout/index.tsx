import React, { ReactNode } from "react";
import Header from "./header";

interface LayoutType {
  children: ReactNode;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
