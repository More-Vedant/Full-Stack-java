import { createRoot } from 'react-dom/client';
import { App } from './App.jsx';
import { myStore } from './';

createRoot(document.getElementById('root')).render(
  <>
  <App/>
  </>,
);