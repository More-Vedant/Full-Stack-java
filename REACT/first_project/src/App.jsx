// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, {useState} from "react";
import './App.css'

export function App() {
    const [count, setCount] = useState(0);

    const handleDec = () => {
        setCount((prv) => prv - 1);
    };

    const handleInc = () => {
        setCount((prv) => prv + 1);
    };


// let count = 0;

// const handleDec = () => {
//   count--;
//    document.getElementById('count').innerText = `count ${count}`;
// };

// const handleInc = () => {
//    count++;
//    document.getElementByid('count').innerText = `count ${count}`;
//    };

return (
    <>
    <h1 id="count">count {count} </h1>
    <button onclick={handleDec}>dec</button>
    <button onclick={handleInc}>inc</button>
    </>
);
}
