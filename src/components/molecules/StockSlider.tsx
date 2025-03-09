import { useAppSelector } from "@/hooks/useReduxTypes";
import TypingEffect from "./tpewriter";
import { CircleGauge, Info, Loader, Slack } from "lucide-react";
import { memo } from "react";

const StockSlider = () => {
  const isWithinTradingHours = () => {
    const currentTime = new Date();
    const start = new Date();
    const end = new Date();
    start.setHours(9, 15, 0, 0);
    end.setHours(15, 30, 0, 0);

    return currentTime >= start && currentTime <= end;
  };
  const {data}=useAppSelector((state)=>state.sliderData)

  return (
    <div className="overflow-x-hidden h-[75vh] md:h-[50vh] lg:h-[85.5vh] bg-[#161514] rounded-sm border border-zinc-600 font-inter">
      <div className="border border-gray-800 rounded-sm">
        <div className="justify-between border-b border-zinc-500 pr-2 py-1 flex text-white items-center w-full">
          <div
            className={`text-white ml-2 flex items-center text-xs gap-1 relative group cursor-pointer`}
          >
            <CircleGauge className="text-purple-400" size={16} />
            <span className="border-b border-zinc-500">RealTick meter</span>
            <Info size={16} className="cursor-pointer" />
            <div className="absolute  top-7 z-50 hidden lg:w-[30vw] p-3 bg-white border border-gray-700 rounded-lg shadow-lg group-hover:block transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700">
              <p className="font-extralight text-gray-900 text-sm dark:text-gray-400">
                Monitor the live stock data through the meter, tracking the
                highest and lowest price points of the day in real-time.
              </p>
            </div>
          </div>

          <div
            className={`flex items-center right-4 ${
              !isWithinTradingHours() ? "hidden" : ""
            }`}
          >
            <TypingEffect />
            <span className="animate-spin">
              <Slack size={16} />
            </span>
          </div>
        </div>
        <table className="table-auto text-left text-gray-300 w-full">
          <thead className="border-b border-gray-400">
            <tr>
              <th scope="col" className="px-4 font-inter text-sm">
                Time
              </th>
              <th scope="col" className="px-4 font-inter text-sm">
                Scripts Name
              </th>
              <th scope="col" className="px-4 font-inter text-sm">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0
              ? data.map((item,index) => (
                  <tr
                    key={index}
                    className={`${
                      item.status === "high"
                        ? "text-green-500"
                        : "text-[#FF0800]"
                    } font-sans `}
                  >
                    <td className="px-4">{item.Time}</td>
                    <td className="px-4">
                      {item.stock} Made {item.status} of
                    </td>
                    <td className="px-4">{item.price}</td>
                  </tr>
                ))
              : (<>
              <div className=" flex items-center absolute">
             <h1 className="" >Loading </h1>   
             <Loader className="animate-spin"/>
              </div>
             
              </>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(StockSlider);
