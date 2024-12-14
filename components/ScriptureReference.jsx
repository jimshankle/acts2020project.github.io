import React from 'react';

export default function ScriptureReference({ reference, children }) {
  const handleClick = (e) => {
    e.preventDefault();
    const ref = reference || children;
    window.open(
      `https://www.biblegateway.com/passage/?search=${ref}&version=NASB`,
      '_blank'
    );
  };

  return (
    <span
      onClick={handleClick}
      className="text-[#fbd38d] cursor-pointer hover:text-white hover:filter hover:drop-shadow-glow transition-all duration-300"
    >
      {children || reference}
    </span>
  );
}
