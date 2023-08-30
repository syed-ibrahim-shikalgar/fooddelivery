import React from "react";
import { foodItemImage_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between p-[1.5rem] border-b-[1px] border-[#7e7a7a]"
        >
          <div>
            <h2 className="text-[22px] font-[500] mb-[15px]">
              {item?.card?.info?.name}
            </h2>
            <h4 className="text-[18px]">
              ₹
              {Math.round(
                item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100
              )}
            </h4>
            <p className="text-[15px] w-[70%] mt-[10px]">
              {item?.card?.info?.description}
            </p>
          </div>
          <div>
            <img
              className="food_item_img h-[5rem] w-[6rem] rounded-[10px]"
              src={foodItemImage_URL + item?.card?.info?.imageId}
              alt=""
            />
            <button className="food_add_btn ">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
