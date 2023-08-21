import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantsData } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(restaurantsData);

    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // if (listOfRestaurants?.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            placeholder="Type here to search"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="srch-btn"
            onClick={() => {
              const filtered_rest = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase()?.includes(searchText)
              );

              setListOfRestaurants(filtered_rest);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rat-res">
          <button
            className="filter-btn"
            onClick={() => {
              const result = listOfRestaurants.filter(
                (filter_res) => filter_res?.info?.avgRating > 4.2
              );
              setListOfRestaurants(result);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((item) => {
          return <RestaurantCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
