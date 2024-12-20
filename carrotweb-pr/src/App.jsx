import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Style1 from './component/style1'
import Style2 from './component/style2'
import Style3 from './component/style3'
import Style4 from './component/style4'
import Footer from './component/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Style1 />
      <Style2 />
      <Style3 />
      <Style4/>
      <Footer />
    </>
  )
}

export default App
