import React from 'react';

const TextSplitter = ({ text }) => {
  return text.split('').map((char, idx) => (
    <span key={idx} className="split">
      {char}
    </span>
  ));
};

export default TextSplitter;
