import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlicer';
import { Button } from '../Components/button';

export const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counter);
  console.log('🚀 ~ count:', count);
  return (
    <>
      <div>Counter {count}</div>
      <Button functions={() => dispatch(increment())} label={'inc'} />
      <Button functions={() => dispatch(decrement())} label={'dec'} />
    </>
  );
};
