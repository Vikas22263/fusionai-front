import  { useEffect, useState } from 'react';

interface Candle {
  high: number;
  low: number;
  open: number;
  close: number;
}

export function CandlestickChart() {
  const [candles, setCandles] = useState<Candle[]>([]);

  useEffect(() => {
    // Simulate real-time candlestick data
    const generateCandle = (): Candle => {
      const base = Math.random() * 100 + 100;
      const variance = Math.random() * 20 - 10;
      const open = base;
      const close = base + variance;
      const high = Math.max(open, close) + Math.random() * 5;
      const low = Math.min(open, close) - Math.random() * 5;
      return { high, low, open, close };
    };

    const initialCandles = Array(20).fill(null).map(generateCandle);
    setCandles(initialCandles);

    const interval = setInterval(() => {
      setCandles(prev => [...prev.slice(1), generateCandle()]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] bg-dark-card rounded-xl p-6">
      <div className="flex h-full items-end space-x-2">
        {candles.map((candle, i) => {
          const isGreen = candle.close > candle.open;
          const height = Math.abs(candle.close - candle.open);
          const wickHeight = candle.high - candle.low;
          const bottom = Math.min(candle.open, candle.close) - candle.low;
          
          return (
            <div key={i} className="relative flex-1 h-full flex items-end">
              <div
                className={`w-[2px] h-[${wickHeight}%] absolute bottom-0 left-1/2 transform -translate-x-1/2 ${
                  isGreen ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ height: `${wickHeight}%`, bottom: `${bottom}%` }}
              />
              <div
                className={`w-full ${
                  isGreen ? 'bg-green-500' : 'bg-red-500'
                } animate-candlestick`}
                style={{ height: `${height}%` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}