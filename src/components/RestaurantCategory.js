import { useState } from "react";
import ItemList from "./ItemList";

export default function RestaurantCategory({ data, showItems, setShowIndex }) {
//   console.log(data);

  

  const handleToggleClick = () => {
    setShowIndex();
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 shadow-lg p-4 bg-slate-50 m-2">
        <div className="flex justify-between cursor-pointer" onClick={handleToggleClick}>
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔻</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
}
