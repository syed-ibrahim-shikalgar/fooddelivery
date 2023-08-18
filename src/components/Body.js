import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { database } from "../utils/Database";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(database);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const result = database.filter(
              (filter_res) => filter_res?.info?.avgRating > 4.2
            );
            setListOfRestaurants(result);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((item) => {
          return <RestaurantCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
