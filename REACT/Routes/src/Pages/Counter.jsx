import React, { useContext } from 'react';

import { CounterValContext } from '../Context/CounterContext';
import { Button } from '../Components/Button';

export const Counter = () => {
    const { count, setCount } = useContext(CounterValContext);

    const handleInc = () => {
        setCount((prev) => prev + 1);
    };
    const handleDec = () => {
        setCount((prev) => prev - 1);
    };
    const handleRes = () => {
        setCount((prev) => 0);
    };

    const data = [
        [ name: 'increment', func: handleInc],
        [ name: 'decrement', func: handleDec],
        [ name: 'reset', func: handleRes],

    ];
}