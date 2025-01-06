import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import './App.css'  
import Blog from './Components/AddBlog';
import Home from './Components/home';
import Header from './Components/Header';
import Editblog from './Components/editblog'
import Singleblog from './Components/singleblog';



function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Addblog' element={<Blog />} />
        <Route path='/edit/:id' element={<Editblog />}></Route>
        <Route path='/view/:id' element={<Singleblog />}></Route>
      </Routes>
    </>
  )
}

export default App
