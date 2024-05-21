import React from 'react';

const TextSplitter = ({ text }) => {
  return text.split('').map((char) => <span className="split">{char}</span>);
};

export default TextSplitter;
