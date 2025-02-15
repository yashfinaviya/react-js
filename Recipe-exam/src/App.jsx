import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Components/Recipelist";
import EditRecipe from "./Components/EditRecipe";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import SingleRecipe from "./Components/SingleRecipe";
import AddRecipe from "./Components/RecipeForm"
import { useSelector } from "react-redux";
import Header from "./Components/Navbar";

function App() {
  const { user } = useSelector(state => state.authReducer);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path='/view/:id' element={<SingleRecipe />}></Route>
      </Routes>
    </>
  );
}

export default App;