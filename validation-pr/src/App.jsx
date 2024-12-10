import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Validation from './component/validation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Validation />
      </div>
    </>
  )
}

export default App;
