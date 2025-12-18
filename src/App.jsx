import { useState } from 'react'

import './App.css'
import Example1 from './components/Example1'
import Exit from './components/Exit'
import Button from './components/Button'
import InputField from './components/InputField'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Example1/> */}
    {/* <Exit/> */}
    {/* <Button/> */}
    {/* <InputField/> */}
    <Card/>
    </>
  )
}

export default App
