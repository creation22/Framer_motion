import { useState } from 'react'

import './App.css'
import Example1 from './components/Example1'
import Exit from './components/Exit'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Example1/> */}
    {/* <Exit/> */}
    <Button/>
    </>
  )
}

export default App
