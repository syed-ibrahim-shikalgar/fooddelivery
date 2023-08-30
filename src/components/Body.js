import React, { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { restaurantsData } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!! please check your Connection </h1>;
  }

  if (listOfRestaurants?.length === 0) {
    return <Shimmer />;
  }

  return (
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
          // console.log(
          //   "discount",
          //   item?.info?.aggregatedDiscountInfoV3?.discountCalloutInfo?.logoCtx
          //     ?.logo
          // );
          return (
            <Link
              className="res_card"
              key={item?.info?.id}
              to={"/restaurants/" + item?.info?.id}
            >
              {item?.info?.aggregatedDiscountInfoV3?.discountCalloutInfo
                ?.logoCtx?.logo ? (
                <RestaurantCardPromoted resData={item} />
              ) : (
                <RestaurantCard resData={item} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
