import React from "react";
import { Link } from "react-router-dom";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MovieCreationSharpIcon from "@mui/icons-material/MovieCreationSharp";
import TvRoundedIcon from "@mui/icons-material/TvRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";

const NavItems: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default NavItems;
