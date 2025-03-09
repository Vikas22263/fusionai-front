import { useAppSelector } from "@/hooks/useReduxTypes";

import { Hourglass, BellDot } from "lucide-react";
import { useEffect, useRef } from "react";
import Indexratediv from "../atoms/Indexratediv";

const IndexIndicator = ({ indexData }) => {
  const { UserDetails } = useAppSelector((state) => state.stateSlice);
  const Timeref = useRef<HTMLInputElement | null>(null);

  const updateTime = () => {
    const date = new Date();

    const time = date.toLocaleTimeString("en-IN", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    if (Timeref.current) {
      Timeref.current.value = time; // Update the input value
    }
  };
  useEffect(() => {
    updateTime();
  }, []);

  return (
    <>
      {!UserDetails ? (
        <header className="bg-[#0f0f0f] h-fit lg:h-[8.5vh] mb-4 mt-2 border border-zinc-600 lg:mx-auto w-[96%] md:w-[95%] md:ml-6 lg:w-[91%] ml-2 mr-2 rounded-md backdrop-blur-lg flex items-center dark:border-gray-800">
          <div className="hidden mlg:inline-flex items-center px-2 py-1 border ml-1 text-white text-sm font-medium rounded-md">
            <span className="animate-pulse ease-in-out">
              <Hourglass color="green" />
            </span>
            <input
              ref={Timeref}
              readOnly
              className="bg-transparent text-center w-24 text-white border-white focus:outline-none pointer-events-none"
            />
          </div>

          <div className="flex flex-wrap md:flex-nowrap">
            {/* indexData.entries()  [name, {ltp, percentage}] */}
            {Array.isArray(indexData) &&
              indexData.length > 0 &&
              indexData.map((items, i) => {
                if (!items || typeof items === "undefined") {
                  return null;
                }
                return (
                  <Indexratediv
                    key={items.name || i}
                    name={items.name}
                    ltp={items.ltp}
                    percentage={items.percentage}
                  />
                );
              })}
          </div>

          <div className="hidden lg:inline-flex w-[23%] items-center justify-end gap-4">
            <div className="text-white ml-1">
              <p className="bg-transparent text-base text-start font-inter border-b border-white text-white font-thin pointer-events-none">
                Status
              </p>
              <p className="flex items-center">
                Live{" "}
                <span className="w-4 h-4 ml-1 bg-green-600 rounded-full animate-pulse"></span>
              </p>
            </div>
            <BellDot color="#9b1290" className="hidden lg:block" />
          </div>
        </header>
      ) : null}
    </>
  );
};

export default IndexIndicator;
