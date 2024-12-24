import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";
import { Link } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";
import TheatersIcon from "@mui/icons-material/Theaters";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

interface wallpaperType {
  name: string;
  title: string;
  original_title: string;
  backdrop_path: string;
  media_type: string;
  first_air_date: Date;
  release_date: Date;
}

const Hero: React.FC = () => {
  const [wallpaper, setWallpaper] = useState<wallpaperType>();

  const getWallpaper = async () => {
    try {
      const res = await instance.get("/trending/all/day");
      const result = res.data.results[Math.floor(Math.random() * 20)];
      console.log(result);
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

          // wallpaper container
          <div className="h-2/3 w-full relative">

            {/* background image */}
            <img
              className="w-full h-full object-cover bg-no-repeat"
              src={`https://image.tmdb.org/t/p/w500${wallpaper.backdrop_path}`}
              alt=""
            />

            {/* display text over the image with z-index */}
            <div className="absolute bottom-10 left-10 flex flex-col gap-3">

              {/* title */}
              <h3 className="font-bold text-6xl">
                {wallpaper.name || wallpaper.title || wallpaper.original_title}
              </h3>

              {/* overview */}
              <p className="text-balance">
                {wallpaper.overview.slice(0, 200)}
                <Link className="text-blue-600" to="">
                  ... more
                </Link>
              </p>

              {/* release date and genre */}
              <div className="flex gap-5 mb-5">
                <div className="space-x-2">
                  <CampaignIcon className="text-yellow-600" />
                  <span>
                    {wallpaper.release_date || wallpaper.first_air_date}
                  </span>
                </div>
                <div className="space-x-2">
                  <TheatersIcon className="text-yellow-600" />
                  <span>{wallpaper.media_type}</span>
                </div>
              </div>

              {/* watch trailer button */}
              <Link
                className="bg-[#e50914] w-fit px-5 py-2 rounded-md text-[#141e47] hover:scale-105 duration-300"
                to=""
              >
                <span>Watch Trailer</span>
                <PlayArrowIcon />
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Hero;
