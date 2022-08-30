import React from "react";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => (
  <div className="relative w-full h-screen bg-primary">{children}</div>
);

export default Layout;
