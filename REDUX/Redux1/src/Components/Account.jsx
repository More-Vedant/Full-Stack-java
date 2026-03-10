import { myStore } from '../';
import { DEPOSITE, WITHDRAW } from '../';
import { useState } from 'react';

export const Account = () => {
  const { dispatch, subscribe } = myStore;

  const [jugad, setJugad] = useState(0);

  const handleDeposite = () => {
  dispatch({ type: DEPOSITE, payload: 10 });
};

subscribe(() => {
  setJugad(jugad + 1);
});

const handleWithdraw = () => {
  dispatch({ type: WITHDRAW, payload: 20});
};

return (
<>
  <h1>Account {myStore.getState().amount}</h1>
  <button onclick={handleDeposite}>deposite</button>
  <button onclick={handlewithdraw}>withdraw</button>
</>
);
};