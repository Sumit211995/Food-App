import RestroCard, {isOpen} from "./RestroCard";
// import restroDetails from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body() {
  const [restroList, setRestroList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestroList, setFilteredRestroList] = useState([]);

  const RestaurantIsOpen = isOpen(RestroCard);

  console.log(filteredRestroList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestroList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  // useEffect(() => {
  //   const fetchUpdateData = async () => {
  //     try {
  //       const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
  //         method: 'POST', // or 'POST' if applicable
  //         headers: {
  //           'Content-Type': 'application/json',
  //           // Add any additional headers required by the Swiggy API
  //           // 'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
  //         },
  //         // Add a request body if needed for POST requests
  //         // body: JSON.stringify({ key: 'value' }),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const json = await response.json();
  //       setRestroList(
  //           json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //         );
  //         setFilteredRestroList(
  //           json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //         );
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  //   fetchUpdateData();
  // }, []);


  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false){
    return(
      <h1>Look's like you are offline!! Please check your internet connection.</h1>
    );
  }

  return restroList?.length === 0 ? (
    <div className="flex flex-wrap mt-12 mx-32">
      {[...Array(15)].map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  ) : (
    <div className="mx-32">
      <div className="flex flex-row justify-between">
        <div className="flex item-center justify-center my-12 text-gray-500 text-2xl gap-4 ml-4">
          {/* <label>Search:</label> */}
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            className="border border-slate-300 rounded-md focus:outline-none p-1"
          />
          <button
            className="py-1 px-4 rounded border bg-gray-500 text-white text-md hover:bg-gray-600 font-bold"
            onClick={() => {
              const filteredRestro = restroList.filter((res) =>
                res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              setFilteredRestroList(filteredRestro);
              // console.log(searchValue);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex justify-end">
          <button
            className="mx-4 my-12 px-2 rounded border bg-green-600 text-white text-md hover:bg-green-800 font-bold"
            onClick={() => {
              topRated = restroList.filter((res) => res.info.avgRating > 4);
              setFilteredRestroList(topRated);
            }}
          >
            Top Rated Restro
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3">
        {filteredRestroList?.map((restaurant) => (
          <div key={restaurant.info.id} className="mb-8">
          <Link to={"/restaurants/" + restaurant.info.id}>
          {
            restaurant.info.isOpen ? <RestaurantIsOpen restroData={restaurant?.info} /> : <RestroCard restroData={restaurant?.info} />
          }
          </Link>
            
          </div>
        ))}
      </div>
    </div>
  );
}
