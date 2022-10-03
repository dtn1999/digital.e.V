import React from "react";
import cn from "classnames";
import LanguageSwitch from "./LanguageWitch";
import { useMeasure } from "react-use";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SocialsHandles from "../Blocks/SocialsHandles";
import { BaseProps } from "../../types/global";
import Seo from "../meta/Seo";

interface Props extends BaseProps {
  seo?: any;
  navBar: any;
  footer: any;
  socialHandles: any[];
}


const Layout: React.FC<Props> = React.memo(
  ({ children, navBar, socialHandles, seo }) => {
    const [ref, { height }] = useMeasure<any>();
    return (
      <React.Fragment>
        {seo && <Seo {...seo} />}
        <div className={cn("relative w-full h-full")}>
          <NavBar
            ref={ref}
            links={navBar.links}
            ctas={navBar.ctas}
            headerHeight={height}
          />
          <main style={{}} className="relative h-full w-full">
            {children}
            {socialHandles.length > 0 && (
              <div className="w-full bg-[#E8E8E8]">
                <SocialsHandles
                  socials={socialHandles}
                  className="flex-wrap py-[10px] text-black"
                  withCustomTextColor
                />
              </div>
            )}
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
