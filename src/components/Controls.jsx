import React, { useRef } from 'react';

const Controls = ({ text, setText }) => {
    const fileInputRef = useRef(null);

    const handleUpClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            setText(event.target.result);
        };
        reader.readAsText(file);
        // Reset input so same file can be selected again
        e.target.value = '';
    };

    const handleDownClick = () => {
        const blob = new Blob([text], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'focus.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="controls">
            <button onClick={handleUpClick} className="control-btn" aria-label="Upload">
                Up
            </button>
            <button onClick={handleDownClick} className="control-btn" aria-label="Download">
                Down
            </button>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".md,.txt"
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default Controls;
