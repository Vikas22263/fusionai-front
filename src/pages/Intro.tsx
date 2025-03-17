import { Footer } from "@/components/pages/IntroPage/footer/Footer";
import { Hero } from "@/components/pages/IntroPage/hero/Hero";
import { Helmet } from "react-helmet-async";

const Intro = () => {
  return (
    <>
     <Helmet>
            {/* Page Title */}
            <title>
              AI Algorithmic Trading Software | FinTech Solutions by AlgoFusionai
            </title>
    
            {/* Meta Description for SEO */}
            <meta
              name="description"
              content="AlgoFusionai delivers AI-powered algorithmic trading software for NSE/BSE, F&O screeners, and real-time analytics. Elevate your FinTech strategy today."
            />
    
            {/* Meta Keywords for SEO */}
            <meta
              name="keywords"
              content="NSE, BSE, F&O screener, algorithmic trading software, AI trading solutions, FinTech tools, stock market analytics"
            />
    
            {/* Author Information */}
            <meta name="author" content="AlgoFusionai Team" />
    
            {/* Open Graph (OG) Meta Tags for Social Media */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://algofusionai.com" />
            <meta
              property="og:title"
              content="AI Algorithmic Trading Software | AlgoFusionai"
            />
            <meta
              property="og:description"
              content="Transform your trading with AI-powered FinTech solutions for NSE, BSE, and F&O markets."
            />
            <meta property="og:image" content="https://algofusionai.com/logo.png" />
    
            {/* Viewport for Mobile Responsiveness */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
            {/* Robots Meta Tag - Controls Search Engine Indexing */}
            <meta name="robots" content="index, follow" />
    
            {/* Twitter Card Meta Tags for Social Sharing */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:title"
              content="AI Algorithmic Trading Software | AlgoFusionai"
            />
            <meta
              name="twitter:description"
              content="Transform your trading with AI-powered FinTech solutions for NSE, BSE, and F&O markets."
            />
            <meta
              name="twitter:image"
              content="https://algofusionai.com/logo.png"
            />
    
            {/* JSON-LD Schema for Structured Data */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  name: "AlgoFusionai",
                  url: "https://algofusionai.com",
                  description:
                    "AI-driven algorithmic trading solutions for FinTech professionals.",
                  logo: "https://algofusionai.com/logo.png",
                  // sameAs: [
                  //   "https://twitter.com/algofusionai",
                  //   "https://linkedin.com/company/algofusionai",
                  // ],
                  // contactPoint: {
                  //   "@type": "ContactPoint",
                  //   email: "support@algofusionai.com",
                  //   contactType: "customer service",
                  // },
                }),
              }}
            />
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
