import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CounterApp from './CounterApp'
import RandomNumberGenrator from './RandomNumberGenrator'
import RandomColor from './RandomColor'

function App() {
  const [count, setCount] = useState(0)


  function increase(){
    if(count>=20)return
    setCount((prev)=>prev+1)
  }
  function decrease(){
    if(count<=0)return
    setCount((prev)=>prev-1)
  }
  function reset(){
    setCount(0)
  }

  return (
    <>
  <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 gap-7 to-blue-500">
      <CounterApp action={{increase,decrease,reset}} count={count}/>
      <RandomNumberGenrator/>
      <RandomColor/>
  </div>
    </>
  )
}

export default App
