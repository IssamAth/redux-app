import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/counter';

function App() {
  const       {count}  = useSelector((state) => state.counter); // Destructure 'count' from 'counter' slice
  // const { count = 0 } = useSelector(state => state.counter); // Setting a default value of 0 if count is undefined
// Use count variable safely here


  const dispatch = useDispatch();
console.log(count);
  return (
    <>
      <div>
        <h1> the count is: {count} </h1>
        <button onClick={() => dispatch(increment())}>increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
      </div>
    </>
  );
}

export default App;
