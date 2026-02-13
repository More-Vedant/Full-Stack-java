import { useRef } from 'react'
import './App.css'

function App() {
  const inputValue = useRef(null);

  const showData = () => {
    const answer = inputValue.current.value;
    console.log(answer);
  };

  return (
    <>
    <input type='text' ref={inputValue} />
    <button onClick={showData}>Click</button>
    </>
  );
}

export default App
