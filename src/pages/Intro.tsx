import { Footer } from "@/components/pages/IntroPage/footer/Footer";
import { Hero } from "@/components/pages/IntroPage/hero/Hero";

const Intro = () => {
  return (
    <>
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
