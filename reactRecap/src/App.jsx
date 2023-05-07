import { useState } from 'react'
import './App.css'
import Countries from './components/Countries/Countries';

function App() {


  return (
    <>
      <div>
        <Countries></Countries>
        <Counter/>
      </div>
     
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  // const increaseCount = () =>setCount(count + 1);
  
  // const decreaseCount = () =>setCount(count - 1);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick= {() =>setCount(count + 1)}>Increase</button>
      <button onClick= {() =>setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default App
