import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { restaurantsData } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
    setFilteredRestaurant(
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

              setFilteredRestaurant(filtered_rest);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rat-res">
          <button
            className="filter-btn"
            onClick={() => {
              const result = listOfRestaurants?.filter(
                (filter_res) => filter_res?.info?.avgRating > 4.2
              );
              setFilteredRestaurant(result);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurant?.map((item) => {
          return (
            <Link
              className="res_card"
              key={item?.info?.id}
              to={"/restaurants/" + item?.info?.id}
            >
              <RestaurantCard resData={item} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
