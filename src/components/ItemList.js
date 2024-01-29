import { CDN_URL } from "../utils/cdn";
export default function ItemList({ items }) {
  console.log(items);
  return (
    <div>
      {items?.map((item) => (
        <div key={item.card.info.id} className="flex flex-row justify-between space-x-4 p-2 m-4 border-b-2">
          <div className="">
            <span className="font-bold">{item.card.info.name} </span>
            <span className="font-bold"> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
            <p className="text-slate-400 text-sm py-6">{item.card.info.description}</p>
          </div>
          <div>
          <div className="mx-20 py-24 absolute">
          <button className="rounded px-2 py-1 bg-black text-white">Add +</button>
          </div>
          <img 
            src={CDN_URL + item.card.info.imageId}
            alt="Items Image"
            className="h-32 w-56 rounded-2xl"
             />
          </div>
          
        </div>
      ))}
    </div>
  );
}
