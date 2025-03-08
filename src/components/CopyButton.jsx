"use client";

import React, { useState } from 'react';

const CopyButton = ({ textToCopy, className, buttonText = "Copy" }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    
    // Reset the copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <button 
      onClick={handleCopy}
      className={className}
    >
      {copied ? "Copied!" : buttonText}
    </button>
  );
};

export default CopyButton;