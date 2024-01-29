import { CDN_URL } from "../utils/cdn";


const RestroCard = (props) => {
    const {restroData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla
      } = restroData;
    // const {image, name, foodType, rating} = restroData;
  return (
    <div>
      {/* {restroDetails.map((restro, index) => ( */}
      <div className="w-full h-full object-cover p-4 hover:transition-all hover:duration-100 hover:ease-in hover:transform hover:scale-95">
  <div className="rounded-2xl w-full font-ivymode cursor-pointer border border-gray-200 shadow-mdx">
    <div className="h-full">
      <div className="">
        <img src={CDN_URL + cloudinaryImageId} alt="RestroImage" className="rounded-2xl w-full h-60" />
      </div>
      <div className="mt-2 p-2 leading-[200%] text-gray-500 text-md font-bold">
        <h1 className="text-xl text-neutral-700">{name}</h1>
        <h4>{cuisines.join(', ')} </h4>
        <h4>
            {costForTwo}
        </h4>
        <h4>
            {sla.slaString}
        </h4>
        <div>
            <span className="bg-green-600 py-1 px-2 text-white rounded-md">{avgRating} {'*'}</span>
        </div>
        
      </div>
    </div>
  </div>
</div>
      {/* ))} */}
    </div>
  );
};

//Higher Order Component

// input - RestaurantCard ==> RestaurantOpen

export const isOpen = (RestroCard) =>{
  return(props) => {
    // console.log(props);
    return(
      <div>
      {
        props.isOpen ? <label className="absolute z-10 float-right font-bold text-white bg-red-500 p-2 rounded-lg">Closed</label> : <label className="absolute z-10 float-right font-bold text-white bg-amber-500 p-2 rounded-lg">Open</label>
      }
        {/* <label className="absolute float-right font-bold text-white bg-green-500 p-2 rounded-lg">Open</label> */}
        <RestroCard {...props}/>
      </div>
    )
  }
}

export default RestroCard;