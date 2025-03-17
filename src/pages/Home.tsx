import IndexIndicator from "@/components/molecules/indexIndicator";
import StockSlider from "@/components/molecules/StockSlider";
import MostactiveStock from "@/components/organisms/MostactiveStock";
import { useAppSelector } from "@/hooks/useReduxTypes";
import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  // const { indexData } = useAppSelector((state) => state.setIndexData);
  // console.log(indexData);
  return (
    <>
      <Helmet>
        {/* ------------------------ */}
        {/* Page-Specific Title & Meta Tags */}
        {/* ------------------------ */}
        <title>
          Stock Screener: Track Day High/Low, Breakers & Most Active
          Stocks | AlgoFusionai
        </title>
        <meta
          name="description"
          content="Analyze real-time livestock stocks with AlgoFusionai's AI-powered screener. Track day high/low, breakout stocks (breakers), and most active equities on NSE/BSE markets."
        />
        <meta
          name="keywords"
          content="livestock stock screener, day high low stocks, breakers stocks, most active stocks, NSE livestock data, BSE livestock analysis, breakout stocks screener"
        />

        {/* ------------------------ */}
        {/* Open Graph & Social Tags */}
        {/* ------------------------ */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://algofusionai.com/screener"
        />
        <meta
          property="og:title"
          content="Livestock Stock Screener: Day High/Low, Breakers & Active Stocks | AlgoFusionai"
        />
        <meta
          property="og:description"
          content="Track livestock stocks with AI: Real-time day high/low, breakers, and most active equities on NSE/BSE."
        />
        <meta
          property="og:image"
          content="https://algofusionai.com/logo.png"
        />

        {/* ------------------------ */}
        {/* Twitter Card Tags */}
        {/* ------------------------ */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Livestock Stock Screener: Track Breakout & Active Stocks | AlgoFusionai"
        />
        <meta
          name="twitter:description"
          content="AI-powered livestock stock analysis for day high/low, breakers, and most active equities."
        />
        <meta
          name="twitter:image"
          content="https://algofusionai.com/logo.png"
        />

        {/* ------------------------ */}
        {/* Structured Data (Schema.org) */}
        {/* ------------------------ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            name: "Livestock Stock Market Data",
            description:
              "Real-time dataset tracking day high/low prices, breakout stocks (breakers), and most active livestock equities on NSE/BSE.",
            url: "https://algofusionai.com/screener",
            keywords:
              "livestock stocks, day high low, breakers, most active stocks",
            license: "https://algofusionai.com/Privacy-Policy",
            creator: {
              "@type": "Organization",
              name: "AlgoFusionai",
              url: "https://algofusionai.com",
            },
            temporalCoverage: "2023-01-01/2023-12-31",
            variableMeasured: [
              "Stock price",
              "Trading volume",
              "Price breakout signals",
            ],
          })}
        </script>

        {/* ------------------------ */}
        {/* Technical SEO Enhancements */}
        {/* ------------------------ */}
        <link
          rel="canonical"
          href="https://algofusionai.com/screener"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
      </Helmet>

      {/* <IndexIndicator indexData={indexData} /> */}

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
