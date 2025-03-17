import { useNavigate } from "react-router-dom";
import { AIInsights } from "./AIInsights";
import { TradingVisual } from "./TradingVisual";

import { ArrowRight, Bot,  } from "lucide-react";


export function Hero() {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen bg-[#161514] text-white font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="space-y-8 animate-slideFromLeft">
            <div className="inline-flex items-center border border-zinc-600 px-4 py-2 bg-accent-primary/10 text-accent-primary rounded-full text-sm font-medium">
              <Bot size={16} className="mr-2" />
              <span>AI-Powered Trading Assistant</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Smart Trading Decisions
                <span className="block  text-accent-primary">Powered by AI</span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed ">
                Make informed trading decisions with real-time AI analysis, and
                market insights.
              </p>
            </div>

              <button onClick={()=>{
                navigate('/screener')
              }} className="bg-[#bd44db] text-black  px-4 py-4 rounded-md flex hover:bg-[#db92db]">
                Start Trading Now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            <AIInsights />
          </div>
          {/* Right column - Visual */}
          <div className="animate-slideFromRight">
            <TradingVisual />
          </div>
        </div>
      </div>
    </div>
  );
}
