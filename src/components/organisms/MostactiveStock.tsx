import React, { useContext, useEffect, useState } from "react";
import ActiveStock from "../molecules/activeStock";
import { Bearicon, Bullmarket } from "@/assets";

import { Info } from "lucide-react";
import { WebSocketContext } from "@/context/socket";
import { useAppSelector } from "@/hooks/useReduxTypes";

const MostactiveStock = () => {

  const [mode, setMode] = useState("Bull");
  const [filterval, setFilterval] = useState("FifteenMBuy");

  const socket = useContext(WebSocketContext);
  const {MostActive}=useAppSelector((state)=>state.setIndexData)

  const EmitTimeFrameQueryForMostActive = (value) => {
  
      try {
        const dataToSend = JSON.stringify({
          event: "Mostactive",
          data: value,
        });
        socket.send(dataToSend )
        console.log("Data sent successfully:", dataToSend);
      } catch (error) {
        console.error("Failed to send data:", error);
      }
   
  };

  const HandelChangeMode = (val) => {
    const newFilterValue = val === "Bull" ? "FifteenMBuy" : "FifteenMSell";
    setMode(val);
    setFilterval(newFilterValue); // Ensure filterval is updated when mode changes
    EmitTimeFrameQueryForMostActive(newFilterValue); // Emit the new filter value
  };

  const handelFilterTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFilterval(val); 
    EmitTimeFrameQueryForMostActive(val); 
  };

  const filterOptionsbuy = [
    { name: "15", value: "FifteenMBuy" },
    { name: "30", value: "ThirtyMBuy" },
    { name: "60", value: "OneHourBuy" },
  ];
  const filterOptionsSell = [
    { name: "15", value: "FifteenMSell" },
    { name: "30", value: "ThirtyMSell" },
    { name: "60", value: "OneHourSell" },
  ];

  // Determine the selected filter option based on mode and filterval
  const selectedFilterOption =
    mode === "Bull"
      ? filterOptionsbuy.find((option) => option.value === filterval)
      : filterOptionsSell.find((option) => option.value === filterval);

  useEffect(() => {
    // Emit the query for the current mode and filter value
    EmitTimeFrameQueryForMostActive(filterval);
    // Listen to the socket event

    // Cleanup listener on unmount
    return () => {
      // socket.close();
    };
  }, [filterval]);

  return (
    <>
      <div className="flex items-center justify-between mb-2 bg-[#0f0f0f] border border-zinc-600 rounded-md shadow-lg px-4 py-1">
        <div className="flex gap-2 flex-wrap">
          <div
            onClick={() => HandelChangeMode("Bull")}
            className={`flex cursor-pointer bg-gray-900 gap-1 px-3 py-1 rounded-md items-center border border-[#57bd49a2] ${
              mode == "Bull" && "bg-[#120c36]"
            }`}
          >
            <img className="w-6 h-6" src={Bullmarket} alt="" />
            <button
              className={`text-[#03C03C] font-inter font-semibold rounded-md`}
            >
              Bull
            </button>
          </div>

          <div
            onClick={() => HandelChangeMode("Bear")}
            className={`flex cursor-pointer bg-gray-900 gap-1 px-3 rounded-md items-center border border-[#b8423e] ${
              mode == "Bear" && "bg-[#120c36]"
            }`}
          >
            <img className="w-6 h-6" src={Bearicon} alt="" />
            <button className="text-[#FF0800] font-inter font-semibold rounded-md">
              Bear
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 ">
          <div className="rounded-lg border border-[#8d5baa]">
            {mode === "Bull" ? (
              <select
                value={selectedFilterOption ? selectedFilterOption.value : ""}
                onChange={handelFilterTime}
                className="bg-transparent text-white px-3 py-1 rounded-md  focus:outline-none"
              >
                {filterOptionsbuy.map((e, i) => (
                  <option key={i} value={e.value} className="bg-black">
                    {e.name}
                  </option>
                ))}
              </select>
            ) : (
              <select
                value={selectedFilterOption ? selectedFilterOption.value : ""}
                onChange={handelFilterTime}
                className="bg-transparent text-white px-3 py-1 rounded-md  focus:outline-none"
              >
                {filterOptionsSell.map((e, i) => (
                  <option key={i} value={e.value} className="bg-black">
                    {e.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <p className="text-zinc-200 font-extralight text-sm">minutes</p>

          <div className="relative w-full group">
            {/* Info Icon */}
            <Info className="text-gray-200 cursor-pointer" size={20} />

            {/* Info Card */}
            <div className="absolute -right-2 top-7 z-30 hidden lg:w-[30vw] p-3 bg-white border border-gray-700 rounded-lg shadow-lg group-hover:block transition-all duration-300 ease-in-out dark:bg-gray-800 dark:border-gray-700">
              <p className="font-extralight text-gray-900 text-sm dark:text-gray-400">
                Most active stocks on the market, highlighting both buying and
                selling activity across various timeframes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap h-[80%] overflow-y-auto bg-[#0f0f0f] border border-zinc-600 rounded-md">
        {MostActive.length > 0 && (
          <div className="flex items-center gap-2">
            <span
              className={`inline-block ml-8 text-lg font-medium ${
                mode == "Bull"
                  ? "text-green-500 border-[#51ca39] "
                  : "text-red-600 border-[#FF0800]"
              } border-b `}
            >
              Most Active Scripts
            </span>
            {mode == "Bull" ? (
              <img className="w-5 h-5" src={Bullmarket} alt="" />
            ) : (
              <img className="w-5 h-5" src={Bearicon} alt="" />
            )}
          </div>
        )}

        <div className="flex flex-wrap w-full justify-center h-full gap-4 px-2 py-2">
          {MostActive.length > 0 ? (
            MostActive.map((e, i) => <ActiveStock i={i} value={e} mode={mode} />)
          ) : (
            <>
              <div className="flex items-center w-full justify-center ">
                <div className="w-[60%] h-[60%] rounded-lg overflow-hidden shadow-lg bg-gray-900 cursor-pointer  text-white">
                  <div className="px-6 py-4 text-center">
                    <h1 className="font-bold text-xl  text-white">
                      No stock Found
                    </h1>
                    <p className="text-white mt-2">
                      It seems we couldn't find any stock at the moment. Please
                      Wait...
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MostactiveStock;
