import React, { useState, useEffect } from "react";
import { restaurantMenu_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  //fetchData

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(restaurantMenu_URL + resId);
    const res_menu = await data.json();
    setResInfo(res_menu.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

// const [searchText, setSearchText] = useState("");
// const [menuItem, setMenuItem] = useState("");
// const [filterMenuItem, setFilterMenuItem] = useState("");

// setMenuItem(
//   res_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
//     ?.card?.card?.itemCards
// );
// setFilterMenuItem(
//   res_menu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
//     ?.card?.card?.itemCards
// );

{
  /* <div>
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
      </div> */
}
