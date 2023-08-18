import React from "react";
import RestaurantCard from "./RestaurantCard";
import { database } from "../utils/Database";

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {database.map((item) => {
          return <RestaurantCard key={item?.info?.id} resData={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
