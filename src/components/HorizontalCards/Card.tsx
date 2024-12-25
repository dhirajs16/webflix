import React from "react";
import { Link } from "react-router-dom";

interface itemType {
  id: number;
  name: string;
  title: string;
  original_title: string;
  backdrop_path: string;
  media_type: string;
  first_air_date: string;
  release_date: string;
  overview: string;
}

interface CardPropType {
  item: itemType;
}

const Card: React.FC<CardPropType> = ({ item }) => {
  return (
    <>
      <div
        key={item.id}
        className="h-[400px] w-[200px] space-y-3 p-3 bg-slate-900 rounded-lg"
      >
        <img
          className="w-full h-[35%] object-cover"
          src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          alt={item.title || item.name}
        />
        <h3 className="font-bold text-xl">
          {item.name || item.title || item.original_title}
        </h3>

        <p className="text-balance text-slate-400">
          {item.overview.slice(0, 50)}
          <Link className="text-blue-600" to="">
            ... more
          </Link>
        </p>
      </div>
    </>
  );
};

export default Card;
