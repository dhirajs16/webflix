import React from "react";
import LiveTvTwoToneIcon from "@mui/icons-material/LiveTvTwoTone";
import NavItems from "./NavItems";

const SideNav: React.FC = () => {
  return (
    <>
      <div className="fixed w-[20vw] h-[100vh] border-r-2 border-zinc-500 p-5">
        {/* logo and title */}
        <div className="flex items-center gap-2 cursor-pointer">
          <LiveTvTwoToneIcon className="text-[#e50914]" />
          <span className="text-2xl font-semibold">Webflix</span>
        </div>

        {/* New Fees and Nav items */}
        <div>
          <h3 className="text-xl font-semibold pt-10 pb-5">New Feeds</h3>
          <NavItems />
        </div>
      </div>
    </>
  );
};

export default SideNav;
