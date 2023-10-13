import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Responsive Paragraph 
        Word Counter</h1>
        <div className="word-counter">
          <textarea
            rows="5"
            cols="50"
            value={text}
            onChange={handleTextChange}
            placeholder="Type your text here..."
          />
          <div className="count">
            Word Count: {wordCount}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
