import React from "react";

export const LoadingDots: React.FC = () => {
  return (
    <div className="fixed inset-0 flex space-x-2 justify-center items-center bg-black h-screen dark:invert">
      <div className="h-8 w-8 bg-green-600 rounded-full animate-bounce [animation-delay:-0.3s]" />
      <div className="h-8 w-8 bg-purple-700 rounded-full animate-bounce [animation-delay:-0.15s]" />
      <div className="h-8 w-8 bg-red-600 rounded-full animate-bounce" />
    </div>
  );
};
