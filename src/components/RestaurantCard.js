import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <div className="res-card ">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="text-[22px] font-[700] mt-[10px]">{name}</h3>
      <h4 className="text-[15px] mt-[5px]">{cuisines.join(", ")}</h4>
      <h4 className="mt-[5px] text-[15px]">{avgRating} stars</h4>
      <h4 className="mt-[5px] text-[15px]">{costForTwo}</h4>
      <h4 className="mt-[5px] text-[15px]">
        {" "}
        {resData?.info?.sla?.deliveryTime} MIN
      </h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (resData) => {
    return (
      <div>
        <label className="absolute  mt-[20px] ml-[10px] px-[10px]  bg-[#3a4162]">
          Propmoted
        </label>
        <RestaurantCard {...resData} />
      </div>
    );
  };
};

export default RestaurantCard;
