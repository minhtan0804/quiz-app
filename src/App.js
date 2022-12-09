import { useEffect, useLayoutEffect, useState, useRef } from 'react'


function App() {
  const [count, setCount] = useState(60)

  const timerId = useRef()
  const prevCo = useRef()

  useEffect(() => {
    //prevCo.current = count
  }, [count])

  const handleStart = () => {
      timerId.current = setInterval(() => {
        setCount(prevCo => prevCo - 1)
      }, 1000)
  }

  const handleStop = () => {
    clearInterval(timerId.current)
  }


  //console.log(count, prevCo.current);
  
  return (
    <div className="App" style={{padding: 40 }}>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
