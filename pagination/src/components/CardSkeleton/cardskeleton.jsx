import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full h-60 p-4 border border-gray-200 rounded-2xl shadow animate-pulse">
      {/* Title placeholder */}
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      {/* Subtitle placeholder */}
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-6"></div>
      {/* Body/content placeholder */}
      <div className="h-24 bg-gray-300 rounded"></div>
    </div>
  );
};

export default CardSkeleton;
