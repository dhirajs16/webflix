import React from "react";
import Card from "./Card";

interface trendingItemType {
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

interface HorizontalCardsProps {
  trendingItems: trendingItemType[];
  sectionName: string;
}

const HorizontalCards: React.FC<HorizontalCardsProps> = ({
  trendingItems,
  sectionName,
}) => {
  return (
    <>
      <div className="p-5">
        {/* Horizontal Card title */}
        <h3 className="text-2xl font-bold mb-5">{sectionName}</h3>
        <div className="flex items-center gap-3">
          {trendingItems.map((item) => (
            <Card item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HorizontalCards;
