import ItemList from "./ItemList";

export default function RestaurantCategory({data}){

    console.log(data);

    return(
        <div className="flex items-center justify-center">
        <div className="w-3/4 shadow-lg p-4 bg-slate-50 m-2">
        <div className="flex justify-between">
        <span className="font-bold text-lg">{data.title}{" "}({data.itemCards.length})</span>
        <span>🔽🔼</span>
        </div>
        <ItemList items={data.itemCards}/>
        </div>
        
        
            
        </div>
    );
}