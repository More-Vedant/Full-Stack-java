// export const Countes = ({ xyz }) => {
//     console.log("xyz",xyz);
//     const handleDec = () => {
//         xyz.setCount((prv) => prv - 1);
//     };

//     const handleInc = () => {
//         xyz.setCount((prv) => prv + 1);
//     };

//     return (
//         <>
//         <button onClick={handleDec}>dec</button>
//         <button onClick={handleInc}>inc</button>
//         </>
//     );
// };

export const Countes = ({ xyz }) => {
    console.log(xyz);
    const handleDec = () => {
        xyz.setCount((prv) => prv - 1);
    };

    const handleInc = () => {
        xyz.setCount((prv) => prv + 1);
    };

    return (
        <>
        <h1 id="count">count {xyz.count}</h1>
        <button onClick={handleDec}>dec</button>
        <button onClick={handleInc}>inc</button>
        </>
    );
};