import {
  Shield,
  AlertTriangle,
  BarChart3,
  Brain,
  Eye,
  Lock,
  Scale,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

const privacypolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <Helmet>
        <title>Privacy Policy - AlgoFusionai</title>
        <meta
          name="description"
          content="Read the privacy policy of AlgoFusionai to understand how we handle your data."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, AlgoFusionai"
        />
        <meta name="author" content="AlgoFusionai Team" />
      </Helmet>
      {/* Header */}
      {/* <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-2 animate-fade-in">
            <Brain className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold text-white">AlgoFusionAI</h1>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Important Disclaimer */}
        <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 mb-8 animate-fade-in">
          <div className="flex items-start">
            <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3 animate-pulse" />
            <div>
              <h2 className="text-lg font-semibold text-yellow-400">
                Important Disclaimer
              </h2>
              <p className="text-yellow-300">
                AlgoFusionAI is NOT registered with SEBI and does not provide
                trading tips or investment advice. This tool is strictly for
                analytical purposes only.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Policy Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 p-8 mb-8 hover:bg-gray-800/70 transition-all duration-300 animate-fade-in-delay-1">
          <div className="flex items-center mb-6">
            <Lock className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
          </div>

          <div className="space-y-6">
            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Data Collection
              </h3>
              <p className="text-gray-300">
                We collect and process trading data solely for analytical
                purposes. This includes market data, trading patterns, and user
                preferences to enhance our AI analysis capabilities.
              </p>
            </div>

            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Data Usage
              </h3>
              <p className="text-gray-300">
                Your data is used exclusively for providing market analysis and
                insights. We do not share your personal information with third
                parties unless required by law.
              </p>
            </div>

            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Security Measures
              </h3>
              <p className="text-gray-300">
                We implement industry-standard security measures to protect your
                data from unauthorized access, disclosure, or misuse.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Use Section */}
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg shadow-xl border border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-300 animate-fade-in-delay-2">
          <div className="flex items-center mb-6">
            <Scale className="w-8 h-8 text-blue-400 mr-3" />
            <h2 className="text-2xl font-bold text-white">Terms of Use</h2>
          </div>

          <div className="space-y-6">
            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Service Description
              </h3>
              <p className="text-gray-300">
                AlgoFusionAI is an AI-powered trading analysis tool designed to
                provide market insights and analysis. We do not provide trading
                tips, recommendations, or investment advice.
              </p>
            </div>

            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                Disclaimer
              </h3>
              <p className="text-gray-300">
                Trading in financial markets involves substantial risk. Our
                analysis is based on historical data and AI algorithms but does
                not guarantee future results. Users are solely responsible for
                their trading decisions.
              </p>
            </div>

            <div className="hover:translate-x-1 transition-transform duration-300">
              <h3 className="text-lg font-semibold text-gray-200 mb-2">
                User Responsibilities
              </h3>
              <p className="text-gray-300">
                Users must understand that this tool is for analysis purposes
                only. Users should conduct their own research and seek
                professional financial advice before making investment
                decisions.
              </p>
            </div>

            <div className="bg-gray-900/50 p-4 rounded-lg mt-8 border border-gray-700 hover:bg-gray-900/70 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-2">
                <Eye className="w-5 h-5 text-blue-400" />
                <h4 className="font-semibold text-gray-200">
                  Important Notice
                </h4>
              </div>
              <p className="text-sm text-gray-300">
                AlgoFusionAI is not registered with SEBI or any other regulatory
                body. We do not provide any form of financial advice, tips, or
                recommendations. The tool is strictly for analytical purposes
                and should not be considered as financial guidance.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 mt-12 animate-fade-in-delay-3">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-6 h-6 text-blue-400" />
              <span className="font-semibold">AlgoFusionAI</span>
            </div>
            <div className="flex items-center space-x-4">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-sm">
                © 2025 AlgoFusionAI. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default privacypolicy;
