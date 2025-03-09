import { Brain } from "lucide-react";

export function AIInsights() {
  return (
    <div className="space-y-4 cursor-pointer">
      <div className="bg-dark-card p-6 rounded-xl border border-accent-primary/20">
        <div className="flex items-center gap-3 mb-4">
          <Brain className="text-accent-primary" />
          <h3 className="text-lg font-semibold text-white">AI Analysis</h3>
        </div>
        <p className="text-gray-300">
          Empower your trading decisions with our advanced analytics tool. Gain
          insights into market trends, identify opportunities, and optimize your
          strategies with precision and confidence.
        </p>
      </div>

    </div>
  );
}
