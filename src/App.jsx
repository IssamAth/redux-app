import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux/counter';

function App() {
  const { count } = useSelector((state) => state.counter); // Destructure 'count' from 'counter' slice
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h1> the count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>increase</button>
        <button>Decrease</button>
      </div>
    </>
  );
}

export default App;
