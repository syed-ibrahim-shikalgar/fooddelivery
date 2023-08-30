import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  return (
    <div className="w-[60vw] mx-auto my-4 p-[1rem] bg-[#1c223c] shadow-xl">
      <div
        className=" flex justify-between hover:cursor-pointer"
        onClick={handleClick}
      >
        <span className="ml-[20px] text-[#908d8d] text-[20px] font-[600]">
          {data?.title} ({data?.itemCards.length})
        </span>
        <span className="">⬇️</span>
      </div>

      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
