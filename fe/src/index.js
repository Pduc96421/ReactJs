import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'


import App from './App';
import { ThemeProvider } from './components/context/themeContext';
import { StoreProvider } from './store';

// fake commnet
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Noi dung cmt cua lesson-${id}`,
      })
    )
  }, 2000);
}

emitComment(1);
emitComment(2);
emitComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreProvider>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>
);