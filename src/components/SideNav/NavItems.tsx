import React from "react";
import { Link } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MovieCreationSharpIcon from "@mui/icons-material/MovieCreationSharp";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';

const NavItems: React.FC = () => {
  return (
    <>
    {/* New Feeds */}
      <nav className="flex flex-col gap-1 text-lg text-zinc-400">
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <WhatshotIcon />
          <span>Trending</span>
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <AutoAwesomeIcon />
          <span>Popular</span>
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <MovieCreationSharpIcon />
          <span>Movies</span>
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <TvRoundedIcon />
          <span>TV Shows</span>
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <GroupsRoundedIcon />
          <span>People</span>
        </Link>
      </nav>


      {/* website info */}
      <h3 className="text-xl font-semibold pt-10 pb-5">Website Info</h3>
      <nav className="flex flex-col gap-1 text-lg text-zinc-400">
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <InfoIcon />
          <span>About</span>
        </Link>
        <Link
          to=""
          className="flex items-center gap-2 p-3 hover:bg-[#e50914] duration-200 hover:text-white rounded-lg"
        >
          <CallIcon />
          <span>Contacts</span>
        </Link>
        </nav>
    </>
  );
};

export default NavItems;
