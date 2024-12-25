import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";
import { Link } from "react-router-dom";
import CampaignIcon from "@mui/icons-material/Campaign";
import TheatersIcon from "@mui/icons-material/Theaters";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import HorizontalCards from "../HorizontalCards/HorizontalCards";

interface WallpaperType {
  id: number
  name: string;
  title: string;
  original_title: string;
  backdrop_path: string;
  media_type: string;
  first_air_date: string;
  release_date: string;
  overview: string;
}

const Hero: React.FC = () => {
  const [wallpaper, setWallpaper] = useState<WallpaperType | null>(null);
  const [trendingItems, setTrendingItems] = useState<WallpaperType[]>([])

  const getWallpaper = async () => {
    try {
      const res = await instance.get("/trending/all/day");
      const items = res.data.results;
      const item = items[Math.floor(Math.random() * 20)]
      // console.log("items:", items);
      // console.log("item:", item);
      setTrendingItems(items);
      setWallpaper(item);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  useEffect(() => {
    !wallpaper && getWallpaper();
  }, [wallpaper]);

  return (
    <>
      {wallpaper && (
        <div className="w-full h-full">
          <div className="h-[60vh] w-full relative">
            <img
              className="w-full h-full object-cover bg-no-repeat"
              src={`https://image.tmdb.org/t/p/w500${wallpaper.backdrop_path}`}
              alt=""
            />

            <div className="absolute bottom-10 left-10 flex flex-col gap-3">
              <h3 className="font-bold text-6xl">
                {wallpaper.name || wallpaper.title || wallpaper.original_title}
              </h3>

              <p className="text-balance">
                {wallpaper.overview.slice(0, 200)}
                <Link className="text-blue-600" to="">
                  ... more
                </Link>
              </p>

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

              <Link
                className="bg-[#e50914] w-fit px-5 py-2 rounded-md text-[#141e47] hover:scale-105 duration-300"
                to=""
              >
                <span className="font-semibold">Watch Trailer</span>
                <PlayArrowIcon />
              </Link>
            </div>
          </div>

          <HorizontalCards sectionName="Trending" trendingItems={trendingItems} />
        </div>
      )}
    </>
  );
};

export default Hero;
