import React from "react";
import { Link } from "react-router-dom";

interface Results {
  // movie
  id: number;
  adult: boolean;
  genre_ids: number[];
  name: string;
  title: string;
  original_title: string;
  backdrop_path: string;
  media_type: string;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;

  // people
  original_name: string;
  gender: number;
  known_for_department: string;
  profile_path: string;

  // tv
  first_air_date: Date;
  origin_country: string[];
}

interface SuggestionsProps {
  results: Results[];
}

const Suggestions: React.FC<SuggestionsProps> = ({ results }) => {
  return (
    <>
      <div className="w-[50%] max-h-[50vh] flex flex-col gap-1 bg-[#373c50] mx-auto overflow-auto rounded-md">
        
        {/* suggestion list */}
        {results.map((result) => (
          <Link
            key={result.id}
            to={``}
            className="flex items-center p-5 rounded-md border-b-2 border-zinc-500 hover:bg-[#e50147] duration-200"
          >
            {/* image */}
            <img
              src={
                result.backdrop_path || result.profile_path
                  ? `https://image.tmdb.org/t/p/w500${
                      result.backdrop_path || result.profile_path
                    }`
                  : "/no_image.jpg"
              }
              className="w-16 h-16 mr-4 rounded-md object-cover"
            />

            {/* title or name */}
            <span className="font-semibold text-zinc-200">
              {result.name ||
                result.title ||
                result.original_title ||
                result.original_name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Suggestions;
