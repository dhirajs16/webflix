import React from "react";
import { Link } from "react-router-dom";

interface Results {
  id: number;
  name: string;
  title: string;
  backdrop_path: string;
}

interface SuggestionsProps {
  results: Results[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ results }) => {
  return (
    <>
      <div className="w-[50%] max-h-[50vh] flex flex-col gap-1 bg-[#373c50] mx-auto overflow-auto rounded-md">
        {results.map((item) => (
          <Link
            key={item.id}
            to={`https://api.themoviedb.org/3/account${item.backdrop_path}`}
            className="flex items-center p-5 rounded-md border-b-2 border-zinc-500 hover:bg-[#e50147] duration-200"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
              alt={item.name}
              className="w-16 h-16 mr-4 rounded-md"
            />
            <span className="font-semibold text-zinc-200">{item.name || item.title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Suggestions;
