import { useState } from 'react';
import './App.css';
import { Countes } from './Components/countes';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h1 id="count">count {count}</h1>
    <Countes xyz={{setCount}}/>
    </>
  );
}