import React from "react";
interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <div className="max-w-5xl p-10 mx-auto">{children}</div>
  </div>
);

export default Layout;
