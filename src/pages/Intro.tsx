import { Footer } from "@/components/pages/IntroPage/footer/Footer";
import { Hero } from "@/components/pages/IntroPage/hero/Hero";
import { Helmet } from "react-helmet-async";

const Intro = () => {
  return (
    <>
      <Helmet>
        <title>AlgoFusionai</title>
        <meta
          name="description"
          content="Welcome to AlgoFusionai, your go-to platform for algorithmic solutions."
        />
        <meta
          name="keywords"
          content="algotrading, AI, AlgoFusionai, solutions"
        />
        <meta name="author" content="AlgoFusionai Team" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <Hero />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Intro;
