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

  // Deterministic random font based on text content
  const getWildFont = (text) => {
    const fonts = ['Impact', 'Brush Script MT', 'Chalkduster', 'Courier New', 'Comic Sans MS', 'Times New Roman', 'Arial Black'];
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % fonts.length;
    return fonts[index];
  };

  // Parse text for highlighting
  const renderHighlightedText = (inputText) => {
    // Split by underscores OR asterisks to find _highlighted_ or *wild* words
    // Regex: /([_*][^_*\n]+[_*])/g captures the delimiters and content
    const parts = inputText.split(/([_*][^_*\n]+[_*])/g);

    return parts.map((part, index) => {
      if (part.startsWith('_') && part.endsWith('_') && part.length > 2) {
        return (
          <span key={index} className="contrast-text">
            {part}
          </span>
        );
      }
      if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
        return (
          <span key={index} className="wild-text" style={{ fontFamily: getWildFont(part) }}>
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
