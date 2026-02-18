import { useContext } from 'react';
import { ContextValue } from '../Context/ContextCounter';

export const Button = () => {
    const { setCount } = useContext(ContextValue);

    const handleInc = () => {
        setCount((prev) => prev + 1);
    };

    const handleDec = () => {
        setCount((prev) => prev - 1);
    };

    const handleRes = () => {
        setCount(() => 0);
    };

    return (
        <>
        <div>
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
            <button onClick={handleRes}>Reset</button>
        </div>
        </>
    );
};