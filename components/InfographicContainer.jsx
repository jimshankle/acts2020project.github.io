import React from 'react';

export default function InfographicContainer({ children, title, description }) {
  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="bg-[#3B5B8F] rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#1a365d] p-4">
          <h2 className="text-xl text-white font-bold">{title}</h2>
        </div>

        {/* SVG Container */}
        <div className="w-full overflow-x-auto p-4">
          <div className="w-full">
            {children}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="p-4 text-white">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
}
