'use client'
import { useState } from 'react';
// import { MyButton } from '../components/button';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      {/* <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} /> */}
    </div>
  );
}


