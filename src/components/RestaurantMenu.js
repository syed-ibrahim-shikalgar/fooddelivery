import React, { useState } from "react";
import { foodItemImage_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [searchText, setSearchText] = useState("");

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, city, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  return (
    <div className="menu">
      <div className="menu-heading">
        <div>
          <h1 className="text-[28px] font-[700]">{name}</h1>
          <p className="text-[18px] mt-[5px]">{cuisines.join(", ")}</p>
          <p className="text-[18px] mt-[5px]">
            {locality}- {city}
          </p>
        </div>
        <div>
          <p className="text-[18px] mt-[5px]">{avgRating} stars</p>
          <p className="text-[18px] mt-[5px]">{costForTwoMessage}</p>
        </div>
      </div>
      <h2 className="my-[30px] text-[28px] font-[700]">Menu</h2>
      <div className="mb-[20px]">
        <input
          className="search-box"
          placeholder="Type here to search"
          type="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="srch-btn"
          // onClick={() => {
          //   itemCards?.filter((menu) => {
          //     return menu?.card?.info?.name
          //       ?.toLowerCase()
          //       ?.includes(searchText);
          //   });
          // }}
        >
          Search
        </button>
      </div>
      <ul>
        {itemCards
          ?.filter((menu) => {
            return menu?.card?.info?.name?.toLowerCase()?.includes(searchText);
          })
          ?.map((item) => {
            return (
              <li className="menu_list" key={item?.card?.info?.id}>
                <div className="food_item">
                  <div>
                    <h2 className="text-[25px] font-[600]">
                      {" "}
                      {item?.card?.info?.name}
                    </h2>
                    <h3 className="mt-[25px] text-[18px]">
                      {" Rs: "}
                      {item?.card?.info?.price / 100 ||
                        item?.card?.info?.defaultPrice / 100}
                    </h3>
                    <h5 className="text-[15px] w-[75%] mt-[10px]">
                      {item?.card?.info?.description}
                    </h5>
                  </div>
                  <div className="food_item_rs">
                    <img
                      className="food_item_img h-[6rem] w-[6rem]"
                      src={foodItemImage_URL + item?.card?.info?.imageId}
                      alt=""
                    />
                    <button className="food_add_btn mb-[20px]">Add</button>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
