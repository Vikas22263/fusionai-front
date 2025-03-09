import { scriptNames } from "@/constants";
import { MoveDown, MoveUp } from "lucide-react";

const ActiveStock = ({ i,value,mode }) => {
  const {name,c_price,percentage}=value

  function isNegative(num) {
    return num < 0;
  }
  return (
    <div
      key={i}
      className="bg-[#161514]  text-white border border-zinc-600  rounded-lg shadow-md p-4 w-full xsm:w-[45%] flex-shrink-0 hover:cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-black"
    >
      {/* Card Content */}
      <p className="text-sm font-inter text-nowrap text-center mx-6 text-gray-400 border-b border-zinc-400">{name}</p>
      <div className="flex gap-2 sm:gap-0 items-center justify-evenly flex-col sm:flex-row max-xsm:flex-col">
        
        <img
          src={scriptNames[name] ||null}
          alt="Stock"
          className="h-12 w-12 mt-1 sm:mt-0 object-cover"
         
        />
        <div className="flex items-center gap-2 mb-2">
          <div >
           
            <p className={`text-xl font-inter text-end ${mode=="Bull"? "text-green-500" :"text-red-600"}`}>{c_price}</p>
           <span className="flex">
           <p className={`text-sm font-inter ${isNegative(percentage)?"text-red-600":"text-green-500"}  text-end `}>{percentage.toString().slice(0,4)}%</p>
           {
            mode=="Bull"?   <MoveUp className="text-green-500"  height={14} />:<MoveDown color="red" height={14}/>
           }
         
           </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveStock;
