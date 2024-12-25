import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Suggestions from "./Suggestions";
import instance from "../../utils/axios";

const TopNav: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);

  // api call for all (movie, tv shows, people) searches
  const getSearches = async () => {
    try {
      const response = await instance.get(`/search/multi?query=${query}`);
      setResults(response.data.results);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    query && getSearches();
  }, [query]);

  return (
    <>
      {/* creating a parent div for top and suggestion and making the suggestion absolute with z-10 */}
      <div className="fixed right-0 top-0 w-[80vw] h-[10vh] z-10 bg-[#141e47]">
        <div className="flex items-center ml-40">
          <SearchIcon onClick={getSearches} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            className="w-[50%] p-3 bg-transparent outline-none text-lg text-zinc-300"
            placeholder="Search Movies, TV Shows, Artists and others"
          />
          {query.length > 0 && <CloseIcon onClick={() => setQuery("")} />}
        </div>
        <div className="relative">
          {query.length > 0 && <Suggestions results={results} />}
        </div>
      </div>
    </>
  );
};

export default TopNav;
