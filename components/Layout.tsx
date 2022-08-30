import React from "react";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => (
  <div className="relative w-full h-screen">{children}</div>
);

export default Layout;
