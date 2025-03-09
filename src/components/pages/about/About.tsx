import React, { useState } from "react";
import {
  BarChart3,
  LineChart,
  Mail,
  MessageSquare,
  TrendingUp,
  Users,
  AlertTriangle,
  Activity,
  TrendingDown,
  Zap,
  Eye,
  ArrowUpRight,
  Layers,
  Target,
  Gauge,
  Globe,
} from "lucide-react";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const [activeTab, setActiveTab] = useState("stocks");

  const mockStockData = {
    topGainers: [
      { symbol: "TATASTEEL", change: "+3.45%", price: "145.30" },
      { symbol: "HDFCBANK", change: "+2.89%", price: "1,678.55" },
      { symbol: "RELIANCE", change: "+2.12%", price: "2,456.70" },
    ],
    topLosers: [
      { symbol: "INFY", change: "-2.34%", price: "1,567.80" },
      { symbol: "TCS", change: "-1.89%", price: "3,456.90" },
      { symbol: "WIPRO", change: "-1.45%", price: "456.78" },
    ],
    activeSectors: [
      { name: "IT", activity: "34.5B", trend: "+1.2%" },
      { name: "Banking", activity: "28.7B", trend: "-0.8%" },
      { name: "Metals", activity: "15.3B", trend: "+2.1%" },
    ],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    alert("Thank you for your feedback!");
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 grid-pattern opacity-20"></div>

      {/* Regulatory Warning Banner */}
      <div className="relative bg-yellow-950/30 border-b border-yellow-900/30">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <AlertTriangle className="h-5 w-5 animate-pulse" />
            <p className="text-sm text-center">
              <strong>SEBI Warning:</strong> Trading in financial markets
              carries risks. Always consult your financial advisor before making
              investment decisions.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black border-b border-blue-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20 animate-gradient"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black"></div>
        <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8 relative">
          <div className="text-center animate-float">
            <Globe className="h-16 w-16 mx-auto mb-8 text-blue-500 animate-pulse-slow" />
            <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 sm:text-7xl md:text-8xl text-glow">
              AlgoFusionAI
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-300/80">
              Next-Generation Trading Analytics Powered by Artificial
              Intelligence
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 animate-glow">
                Get Started
              </button>
              <button className="px-8 py-3 bg-transparent border border-blue-500 text-blue-400 rounded-full hover:bg-blue-900/20 transform hover:scale-105 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* StockMeter Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-glow">
              StockMeter™ Live Market Activity
            </h2>
            <p className="mt-4 text-blue-300/80">
              Real-time insights across 223 NSE scripts
            </p>
          </div>

          {/* Market Activity Tabs */}
          <div className="glass-effect rounded-xl p-8 hover-glow">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("stocks")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === "stocks"
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "bg-black/50 text-gray-400 hover:bg-blue-900/20"
                }`}
              >
                Most Active Stocks
              </button>
              <button
                onClick={() => setActiveTab("sectors")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === "sectors"
                    ? "bg-purple-600/20 text-purple-400 border border-purple-500/30"
                    : "bg-black/50 text-gray-400 hover:bg-purple-900/20"
                }`}
              >
                Sector Activity
              </button>
              <button
                onClick={() => setActiveTab("indicators")}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeTab === "indicators"
                    ? "bg-green-600/20 text-green-400 border border-green-500/30"
                    : "bg-black/50 text-gray-400 hover:bg-green-900/20"
                }`}
              >
                Market Indicators
              </button>
            </div>

            {/* Market Data Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Top Gainers */}
              <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-400">
                    Top Gainers
                  </h3>
                </div>
                <div className="space-y-4">
                  {mockStockData.topGainers.map((stock, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-black/40 rounded-lg hover:bg-black/60 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-300">
                        {stock.symbol}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400">{stock.change}</span>
                        <ArrowUpRight className="h-4 w-4 text-green-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Losers */}
              <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-500/10 rounded-lg">
                    <TrendingDown className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-red-400">
                    Top Losers
                  </h3>
                </div>
                <div className="space-y-4">
                  {mockStockData.topLosers.map((stock, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-black/40 rounded-lg hover:bg-black/60 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-300">
                        {stock.symbol}
                      </span>
                      <span className="text-red-400">{stock.change}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Sectors */}
              <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-transform duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Activity className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    Active Sectors
                  </h3>
                </div>
                <div className="space-y-4">
                  {mockStockData.activeSectors.map((sector, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-black/40 rounded-lg hover:bg-black/60 transition-colors duration-200"
                    >
                      <span className="font-medium text-gray-300">
                        {sector.name}
                      </span>
                      <span className="text-blue-400">{sector.activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Features */}
      <div className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-glow">
              Coming Soon
            </h2>
            <p className="mt-4 text-blue-300/80">
              Revolutionary features that will transform your trading experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Eye className="h-6 w-6 text-blue-400" />}
              title="TradingView Charts"
              description="Advanced charting with custom indicators and drawing tools"
              status="Coming Soon"
            />
            <FeatureCard
              icon={<Layers className="h-6 w-6 text-yellow-400" />}
              title="2500 NSE scripts"
              description="Get Real-time insights across 2500 NSE scripts soon"
              status="Coming Soon"
            />
            <FeatureCard
              icon={<Target className="h-6 w-6 text-purple-400" />}
              title="Sector Scanner"
              description="Real-time sector rotation and momentum analysis"
              status="In Development"
            />
            <FeatureCard
              icon={<Gauge className="h-6 w-6 text-green-400" />}
              title="Market Pulse"
              description="Bulls vs Bears strength indicator for all indices"
              status="Beta Testing"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-glow">
              Our Analytics Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Feature
              icon={<LineChart className="h-8 w-8 text-blue-400" />}
              title="Real-time Analysis"
              description="Get instant insights with our real-time market analysis tools"
            />
            <Feature
              icon={<BarChart3 className="h-8 w-8 text-purple-400" />}
              title="Advanced Charts"
              description="Visualize market trends with our advanced charting capabilities"
            />
            <Feature
              icon={<TrendingUp className="h-8 w-8 text-indigo-400" />}
              title="Predictive Analytics"
              description="Make informed decisions with our AI-powered predictions"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="lg:text-center mb-16">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-glow">
              About AlgoFusionAI
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-blue-300/80 lg:mx-auto">
              We combine cutting-edge AI technology with deep market expertise
              to provide traders with powerful analytics tools for the NSE
              market.
            </p>
          </div>

          <div className="mt-10 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
              <img
                className="w-full h-[400px] object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2000"
                alt="Advanced Trading Analytics"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-glow">
                Share Your Thoughts
              </h2>
              <p className="mt-4 text-blue-300/80">
                Help us improve your trading experience
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="glass-effect p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/20 transition-colors duration-300">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-blue-300"
                      >
                        Full Name
                      </label>
                      <div className="mt-1 relative rounded-lg shadow-sm">
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="block w-full rounded-lg bg-black/60 border border-blue-900/30 text-gray-100 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-colors duration-200"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-blue-300"
                      >
                        Email Address
                      </label>
                      <div className="mt-1 relative rounded-lg shadow-sm">
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="block w-full rounded-lg bg-black/60 border border-blue-900/30 text-gray-100 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-colors duration-200"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-blue-300"
                    >
                      Your Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="block w-full rounded-lg bg-black/60 border border-blue-900/30 text-gray-100 px-4 py-3 focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-colors duration-200"
                        placeholder="Share your experience or suggestions..."
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-blue-900/30"></div>
                    </div>
                    <div className="relative flex justify-center">
                      <span className="px-2 bg-black text-sm text-blue-300">
                        Terms & Conditions
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          id="terms"
                          checked={formData.agreeToTerms}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              agreeToTerms: e.target.checked,
                            })
                          }
                          className="h-4 w-4 rounded border-blue-900 bg-black text-blue-500 focus:ring-blue-500/20"
                        />
                      </div>
                      <div className="ml-3">
                        <label
                          htmlFor="terms"
                          className="text-sm text-blue-300/80"
                        >
                          I understand that the information provided is for
                          educational purposes only and does not constitute
                          financial advice.
                        </label>
                      </div>
                    </div>

                    <p className="text-xs text-blue-300/60 italic">
                      By submitting this form, you acknowledge that trading in
                      financial markets carries significant risks, and you
                      should consult with a qualified financial advisor before
                      making any investment decisions.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-4 px-6 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform hover:scale-[1.02] transition-all duration-200 animate-glow"
              >
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-black border-t border-blue-900/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue-400/60 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-blue-400/60 hover:text-blue-400 transition-colors duration-200"
            >
              <MessageSquare className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-blue-400/60 hover:text-blue-400 transition-colors duration-200"
            >
              <Users className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-400/80 mb-4">
              &copy; 2024 AlgoFusionAI. All rights reserved.
            </p>
            <p className="text-sm text-blue-400/60">
              Disclaimer: Trading in financial markets involves substantial risk
              of loss. Please ensure you fully understand the risks involved and
              seek independent advice if necessary.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group pt-6">
      <div className="glass-effect rounded-xl px-6 pb-8 hover:scale-[1.02] transition-all duration-300">
        <div className="-mt-6">
          <div>
            <span className="inline-flex items-center justify-center p-3 bg-black rounded-lg shadow-lg group-hover:bg-blue-900/20 transition-colors duration-300">
              {icon}
            </span>
          </div>
          <h3 className="mt-8 text-lg font-medium text-blue-300 tracking-tight">
            {title}
          </h3>
          <p className="mt-5 text-base text-blue-300/60">{description}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  status,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <div className="glass-effect rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-blue-900/20 rounded-lg">{icon}</div>
        <h3 className="text-lg font-semibold text-blue-300">{title}</h3>
      </div>
      <p className="text-blue-300/60 mb-4">{description}</p>
      <div className="flex items-center gap-2">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {status}
        </span>
      </div>
    </div>
  );
}

export default About;
