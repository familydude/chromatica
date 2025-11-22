import React, { useState, useRef, useEffect } from 'react';

const Editor = ({ text, setText }) => {
  const textareaRef = useRef(null);
  const preRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Sync scroll
  const handleScroll = () => {
    if (preRef.current && textareaRef.current) {
      preRef.current.scrollTop = textareaRef.current.scrollTop;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  // Parse text for highlighting
  const renderHighlightedText = (inputText) => {
    // Split by underscores to find _highlighted_ words
    // Regex: /(_[^_]+_)/g captures the underscores and content
    const parts = inputText.split(/(_[^_]+_)/g);
    
    return parts.map((part, index) => {
      if (part.startsWith('_') && part.endsWith('_') && part.length > 2) {
        return (
          <span key={index} className="contrast-text">
            {part}
          </span>
        );
      }
      return (
        <span key={index} className="gradient-text">
          {part}
        </span>
      );
    });
  };

  return (
    <div className="editor-container">
      <div className="editor-layer back-layer" ref={preRef}>
        {renderHighlightedText(text)}
        {/* Add a trailing space/newline to ensure cursor visibility at end */}
        <span className="invisible-char"> </span>
      </div>
      <textarea
        ref={textareaRef}
        className="editor-layer front-layer"
        value={text}
        onChange={handleChange}
        onScroll={handleScroll}
        spellCheck="false"
        autoFocus
      />
    </div>
  );
};

export default Editor;
