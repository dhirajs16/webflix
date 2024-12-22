import React, { useEffect, useState } from "react";
import instance from "../../utils/axios";

const Hero: React.FC = () => {
  const [wallpaper, setWallpaper] = useState<any>(null);

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
      <div className="w-full h-[90vh] bg-blue-300">
        {wallpaper && (
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${wallpaper.backdrop_path})`,
              
            }}
            className="h-2/3 w-full bg-black object-contain bg-no-repeat"
          ></div>
        )}
      </div>
    </>
  );
};

export default Hero;
