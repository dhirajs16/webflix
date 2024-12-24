import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";

interface wallpaperType {
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

  // tv
  first_air_date: Date;
  origin_country: string[];
}

const Hero: React.FC = () => {
  const [wallpaper, setWallpaper] = useState<wallpaperType>();

  const getWallpaper = async () => {
    try {
      const res = await instance.get("/trending/all/day");
      const result = res.data.results[Math.floor(Math.random() * 20)];
      setWallpaper(result);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    getWallpaper();
  }, []);

  return (
    <>
      <div className="w-full h-[90vh]">
        {/* image and text only if wallpaper is called successfully. */}
        {wallpaper && (
          <div className="h-2/3 w-full relative">
            <img
              className="w-full h-full object-cover bg-no-repeat"
              src={`https://image.tmdb.org/t/p/w500${wallpaper.backdrop_path}`}
              alt=""
            />
            {/* display text over the image with z-index */}
            <div className="absolute z-10 bottom-10 left-10">
              <span className="">hello</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
