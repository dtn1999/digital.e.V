import React from "react";
import cn from "classnames";
import { BaseProps } from "@app/types";

import LanguageSwitch from "./LanguageWitch";
import { useMeasure } from "react-use";
import SeoComponent from "@app/components/meta/Seo";
import { NavBarContext } from "src/context/NavBarContext";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SocialsHandles from "../Blocks/SocialsHandles";
interface Props extends BaseProps {
  seo?: any;
  navBar: any;
  footer: any;
  socialHandles: any[];
}
const Layout: React.FC<Props> = React.memo(
  ({ children, navBar, socialHandles, seo }) => {
    const [ref, { height }] = useMeasure<any>();
    const { navbarSticky } = React.useContext(NavBarContext);
    return (
      <React.Fragment>
        {seo && <SeoComponent {...seo} />}
        <div className={cn("relative w-full h-full")}>
          <NavBar
            ref={ref}
            links={navBar.links}
            ctas={navBar.ctas}
            headerHeight={height}
          />
          <main
            style={{ marginTop: navbarSticky ? height : 0 }}
            className="h-full w-full"
          >
            {children}
            <div className="w-full bg-[#E8E8E8]">
              <SocialsHandles
                socials={socialHandles}
                className="flex-wrap py-[10px] text-black"
                withCustomTextColor
              />
            </div>
            <Footer />
          </main>
          <div className="fixed -right-5 top-48 z-[100] flex items-center">
            <LanguageSwitch />
          </div>
        </div>
      </React.Fragment>
    );
  }
);
export default Layout;
