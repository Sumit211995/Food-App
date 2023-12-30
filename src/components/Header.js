import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../public/images/shopping_cart.svg";

const Header = () => {

const [btnName, setBtnName] = useState("Login");

  return (
    <div className="w-full bg-white top-0 z-10">
      <div className="flex mx-32 items-center justify-between border-b border-gray-200 text-gray-500 py-4 px-16">
        <div className="ml-4 font-georgia font-bold text-black text-6xl">
          p@h@D! 
        </div>
        <div className="flex flex-row text-xl font-georgia">
          <div className="cursor-pointer hover:text-neutral-700">
          <Link to={"/"}>Home</Link>
          </div>
          <div className="ml-12 cursor-pointer hover:text-neutral-700">
          <Link to={"/about"}>About</Link>
          </div>
          <div className="ml-12 cursor-pointer hover:text-neutral-700">
          <Link to={"/contact"}>Contact-us</Link>
            
          </div>
          <div className="ml-12 cursor-pointer hover:text-neutral-700">
            <img src={Cart} />
          </div>
          <div className="ml-12 cursor-pointer px-2 py-1 rounded-md bg-pink-600 hover:bg-pink-800 text-white">
            <button onClick={()=>{
                {btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}
            }}>{btnName}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;