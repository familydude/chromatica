import React, { useState } from 'react';
import Editor from './components/Editor';
import Controls from './components/Controls';
// import './App.css'; // Removed

function App() {
  const [text, setText] = useState('# Deep Focus\n\nStart writing...\n\nUse _underscores_ for contrast.');

  return (
    <div className="app-container">
      <Editor text={text} setText={setText} />
      <Controls text={text} setText={setText} />
    </div>
  );
}

export default App;
