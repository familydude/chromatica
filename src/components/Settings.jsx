import React from 'react';

const Settings = ({
    mainSpeed,
    setMainSpeed,
    contrastSpeed,
    setContrastSpeed,
    onClose
}) => {
    return (
        <div className="settings-overlay">
            <div className="settings-modal">
                <h2>Settings</h2>

                <div className="setting-group">
                    <label>
                        Main Cycle Speed: {mainSpeed}s
                        <input
                            type="range"
                            min="1"
                            max="20"
                            step="0.5"
                            value={mainSpeed}
                            onChange={(e) => setMainSpeed(Number(e.target.value))}
                        />
                    </label>
                </div>

                <div className="setting-group">
                    <label>
                        Emphasis Cycle Speed: {contrastSpeed}s
                        <input
                            type="range"
                            min="0.1"
                            max="5"
                            step="0.1"
                            value={contrastSpeed}
                            onChange={(e) => setContrastSpeed(Number(e.target.value))}
                        />
                    </label>
                </div>

                <button onClick={onClose} className="close-btn">
                    Close
                </button>
            </div>

            <style>{`
        .settings-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 200;
          backdrop-filter: blur(5px);
        }
        
        .settings-modal {
          background: #111;
          border: 1px solid #333;
          padding: 30px;
          border-radius: 10px;
          width: 300px;
          color: white;
          font-family: var(--font-family);
        }
        
        h2 {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 20px;
          text-align: center;
        }
        
        .setting-group {
          margin-bottom: 20px;
        }
        
        label {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          color: #ccc;
        }
        
        input[type="range"] {
          width: 100%;
          accent-color: #ff00ff;
        }
        
        .close-btn {
          width: 100%;
          padding: 10px;
          background: #333;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-family: var(--font-family);
          transition: background 0.2s;
        }
        
        .close-btn:hover {
          background: #444;
        }
      `}</style>
        </div>
    );
};

export default Settings;
