import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Home";
import AddData from "./Components/AddData";
import Header from "./Components/Header";
import EditData from "./Components/EditData";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/Login";
import SingleBook from "./Components/SingleBook";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector(state => state.authReducer);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddData />} />
        <Route path="/edit/:id" element={<EditData />} />
        <Route path='/view/:id' element={<SingleBook />}></Route>
      </Routes>
    </>
  );
}

export default App;