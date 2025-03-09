import IndexIndicator from "@/components/molecules/indexIndicator";
import StockSlider from "@/components/molecules/StockSlider";
import MostactiveStock from "@/components/organisms/MostactiveStock";
import { useAppSelector } from "@/hooks/useReduxTypes";
import React from "react";


const Home = () => {

 const {indexData}=useAppSelector((state)=>state.setIndexData)
  console.log(indexData)
  return (
    <>
      <IndexIndicator indexData={indexData} />

      <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-0 py-6 px-3 md:p-6 box-border justify-evenly h-[90vh] font-inter">
        <div className="lg:w-[50%] lg:h-[60%] max-h-[80%] w-full">
          <MostactiveStock />
          <div className="flex flex-wrap bg-[#0f0f0f] border border-zinc-600 rounded-md mt-4">
            <div className="flex flex-wrap w-full h-full gap-4 items-center justify-evenly p-4">
              <UpcomingCard />
            </div>
          </div>
        </div>
        <div className="lg:w-[40vw] w-full">
          <StockSlider />
          {/* <div className="absolute bg-red-600 bottom-0 w-[100%] lg:w-[40vw] lg:bottom-[32.5%]"> 
          <GoogleAddCard addsloat={"6636693591"} />
        </div> */}
        </div>
      </div>
    </>
  );
};
const UpcomingCard = React.memo(() => {
  return (
    <div className="font-inter group relative w-full animate-bounce lg:w-[35vw] md:w-full h-40 hover:cursor-pointer bg-[#6B2D5C] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-500 ease-in-out">
      <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-500"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span className="text-[#E0D2C7]">Most Active Sectors</span>
        <h2 className="text-2xl font-bold text-white tracking-wide opacity-90 group-hover:opacity-100 transition-all duration-500">
          Upcoming
        </h2>
        <p className="text-sm text-gray-300 mt-2 opacity-70 group-hover:opacity-90 transition-all duration-500">
          Stay tuned for something exciting!
        </p>
      </div>
      <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-white transition-all duration-500"></div>
    </div>
  );
});

export default Home;
