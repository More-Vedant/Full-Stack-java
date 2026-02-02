import React, {useState} from "react";

export function App() {
    const [count, setCount] = useState(0);

    const handleDec = () => {
        setCount((prv) => prv - 1);
    };

    const handleInc = () => {
        setCount((prv) => prv + 1);
    };


// let count = 0;

//const handleDec = () => {
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