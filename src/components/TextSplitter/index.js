import React from 'react';

const TextSplitter = ({ text, appendedMarkup }) => {
  return [
    ...text.split('').map((char, idx) => (
      <span key={idx} className="split">
        {char}
      </span>
    )),
    appendedMarkup ? <span className="split">{appendedMarkup}</span> : '',
  ];
};

export default TextSplitter;
