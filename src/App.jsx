import React, { useState } from 'react';
import Editor from './components/Editor';
import Controls from './components/Controls';
import Settings from './components/Settings';
// import './App.css'; // Removed

function App() {
  const [text, setText] = useState('# Deep Focus\n\nStart writing...\n\nUse _underscores_ for contrast.');
  const [showSettings, setShowSettings] = useState(false);
  const [mainSpeed, setMainSpeed] = useState(8);
  const [contrastSpeed, setContrastSpeed] = useState(2);
  const [mainFont, setMainFont] = useState('Inter');

  const containerStyle = {
    '--main-speed': `${mainSpeed}s`,
    '--contrast-speed': `${contrastSpeed}s`,
    '--font-family': mainFont
  };

  return (
    <div className="app-container" style={containerStyle}>
      <Editor text={text} setText={setText} />
      <Controls
        text={text}
        setText={setText}
        onSettingsClick={() => setShowSettings(true)}
      />
      {showSettings && (
        <Settings
          mainSpeed={mainSpeed}
          setMainSpeed={setMainSpeed}
          contrastSpeed={contrastSpeed}
          setContrastSpeed={setContrastSpeed}
          mainFont={mainFont}
          setMainFont={setMainFont}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}

export default App;
