import React from "react";
import { Link } from 'react-router-dom';

const Suggestions: React.FC = () => {
  return (
    <>
      <div className="w-[50%] max-h-[50vh] flex flex-col gap-1 bg-[#373c50] mx-auto overflow-auto rounded-md">
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
        <Link to="" className="flex items-center p-5 rounded-md border-b-2">
          <img src="" alt="image1" />
          <span className="font-semibold text-zinc-200">Hello world</span>
        </Link>
      </div>
    </>
  );
};

export default Suggestions;
