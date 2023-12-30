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
  <div className="rounded-2xl w-full font-ivymode cursor-pointer">
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

export default RestroCard;