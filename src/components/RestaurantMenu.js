import React, { useEffect, useState } from "react";
import { foodItemImage_URL, restaurantMenu_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [menuItem, setMenuItem] = useState("");
  const [filterMenuItem, setFilterMenuItem] = useState("");
  console.log(resInfo);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(restaurantMenu_URL + resId);
    const res_menu = await data.json();

    setResInfo(res_menu.data);
    setMenuItem(
      res_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
    setFilterMenuItem(
      res_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards
    );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, locality, city, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  //   const itemCards =
  //     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  //       ?.itemCards;
  //   console.log("items", itemCards);

  return (
    <div className="menu">
      <div className="menu-heading">
        <div>
          <h1>{name}</h1>
          <p>{cuisines.join(", ")}</p>
          <p>
            {locality}- {city}
          </p>
        </div>
        <div>
          <p className="avgrating">{avgRating} stars</p>
          <p>{costForTwoMessage}</p>
        </div>
      </div>
      <h2>Menu</h2>
      <div>
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
          onClick={() => {
            const filtered_item = menuItem.filter((res) =>
              res?.card?.info?.name?.toLowerCase()?.includes(searchText)
            );

            setFilterMenuItem(filtered_item);
          }}
        >
          Search
        </button>
      </div>
      <ul>
        {filterMenuItem?.map((item) => {
          return (
            <li className="menu_list" key={item?.card?.info?.id}>
              <div className="food_item">
                <div>
                  <h2> {item?.card?.info?.name}</h2>
                  <h3>
                    {" Rs: "}
                    {item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100}
                  </h3>
                  <h5 className="food_item_desc">
                    {item?.card?.info?.description}
                  </h5>
                </div>
                <div className="food_item_rs">
                  <img
                    className="food_item_img"
                    src={foodItemImage_URL + item?.card?.info?.imageId}
                    alt=""
                  />
                  <button className="food_add_btn">Add</button>
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
