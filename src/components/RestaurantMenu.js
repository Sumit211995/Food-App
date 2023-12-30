import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/cdn";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestaurantMenu() {

  const {resId} = useParams();

const resInfo = useRestaurantMenu(resId);

  console.log(resInfo);

 

  let cardInfo = resInfo?.cards[0].card.card.info;
  console.log("--->", resInfo?.cards[0].card.card.info);

let itemInfo = resInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
console.log(itemInfo);


  return resInfo === null ? (
    <div className="flex flex-wrap mt-12 mx-32">
      <Shimmer />
    </div>
  ) : (
    <>
      <div className="mx-32 mt-8">
        <div className="">
          <div className="">
            <img
              src={CDN_URL + cardInfo.cloudinaryImageId}
              alt="RestroImage"
              className="rounded-2xl w-full h-96"
            />
          </div>
          <div className="mt-2 p-2 leading-[200%] text-gray-500 text-md font-bold">
            <h1 className="text-xl text-neutral-700">{cardInfo.name}</h1>
            <h4>{cardInfo.cuisines.join(", ")} </h4>
            <h4>{"Cost for two: "}{cardInfo.costForTwo/100}</h4>
            <h4>{/* {cardInfo.sla.slaString} */}</h4>
            <div>
              <span className="bg-green-600 py-1 px-2 text-white rounded-md">
                {cardInfo.avgRating} {"*"}
              </span>
            </div>
            <div className="">
            <h1 className="ml-20 mt-12 text-xl text-black">Recommended: ({itemInfo.length})</h1>
            <ul>

            
                {
                    itemInfo.map((item)=>(
                            <li key={item?.card?.info?.id} className="flex m-8 justify-between mx-32 text-2xl items-center">
                            {item?.card?.info?.name} -{" Rs. "}
                            {item.card.info.price/100} {" "}
                           { <img
              src={CDN_URL + item.card.info.imageId}
              alt="RestroImage"
              className="rounded-2xl h-32 w-48"
            />}
                            {/* {item.card.info.imageId} */}
                            </li>
                           
                    ))
                }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
