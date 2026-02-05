// import { useState } from 'react';
// import './App.css';
// import { Countes } from './Components/countes';

// export function App() {
//   const [count, setCount] = useState(0);
//   return (
//     <>
//     <h1 id="count">count {count}</h1>
//     <Countes xyz={{setCount}}/>
//     </>
//   );
// }

import { useState } from 'react';
import './App.css';
import { Countes } from './Components/Countes';
import { Data } from './Components/Data';
import { AxiosData } from './Components/Axios';

export function App() {
  const [count, setCount] = useState(0);

  const API = '';

  const data = [

  ];

  return (
    <>
    <Countes xyz={{ setCount,count }} />

    <Data props={{ data }} />

    <AxiosData url={API} />
    </>
  );
}