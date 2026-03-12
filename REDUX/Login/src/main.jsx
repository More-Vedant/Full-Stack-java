import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { Provider } from 'react-redux';

import { ownStore } from './';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
