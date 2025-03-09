import { ChartBar, Rocket, Cog, Bot } from "lucide-react";
import { Sidebarimage } from "@/assets";

export function TradingVisual() {
  return (
    <div className="relative w-full h-[600px]">
      {/* Main trading platform image */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden animate-float ">
        <img
          src={Sidebarimage}
          alt="Trading Platform"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark/80 to-transparent" />
      </div>

      {/* Floating cards */}
      <div className="analysis-card">
        {/* Header with animation */}
        <div className="header">
          <Bot className="bot-icon" />
          <span>AI-Powered Trading Insights</span>
          <div className="animated-border"></div>
        </div>

        {/* AI Features and Insights */}
        <div className="content">
          {/* AI Tool Icon 1 */}
          <div className="feature">
            <ChartBar className="icon" />
            <p className="text">Instant analysis of market trends</p>
          </div>

          {/* AI Tool Icon 2 */}
          <div className="feature">
            <ChartBar className="icon" />
            <p className="text">Smart trend forecasting with AI precision</p>
          </div>

          {/* AI Tool Icon 3 */}
          <div className="feature">
            <Rocket className="icon" />
            <p className="text">
              Accelerate decision-making with real-time data
            </p>
          </div>

          {/* AI Tool Icon 4 */}
          <div className="feature">
            <Cog className="icon" />
            <p className="text">Optimized trading strategies powered by AI</p>
          </div>
        </div>
      </div>
    </div>
  );
}
