
import { LineChart, ArrowUpCircle, ArrowDownCircle, BarChart, TrendingUp } from 'lucide-react';

export function TradingAnimation() {
  return (
    <div className="relative w-full h-[500px] animate-float">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl" />
      
      {/* Main trading card */}
      <div className="absolute right-0 top-10 bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-3 mb-4">
          <LineChart className="text-blue-600" />
          <span className="font-semibold">Live Trading</span>
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-2 bg-green-50 p-2 rounded-lg">
            <ArrowUpCircle className="text-green-500" />
            <span className="text-sm font-medium">BTC +5.23%</span>
            <TrendingUp className="text-green-500 h-4 w-4 ml-auto" />
          </div>
          <div className="flex items-center gap-2 bg-red-50 p-2 rounded-lg">
            <ArrowDownCircle className="text-red-500" />
            <span className="text-sm font-medium">ETH -2.12%</span>
            <TrendingUp className="text-red-500 h-4 w-4 ml-auto rotate-180" />
          </div>
        </div>
      </div>
      
      {/* Analytics card */}
      <div className="absolute right-4 bottom-10 bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-3 mb-4">
          <BarChart className="text-purple-600" />
          <span className="font-semibold">Analytics</span>
        </div>
        <div className="flex gap-2 h-[120px] items-end">
          {[40, 70, 45, 90, 60, 80].map((height, i) => (
            <div
              key={i}
              className="w-4 bg-purple-100 rounded-full relative group"
              style={{ height: '100%' }}
            >
              <div
                className="absolute bottom-0 w-full bg-purple-600 rounded-full animate-grow transition-all duration-300 group-hover:bg-purple-700"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}