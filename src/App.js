import logo from './logo.svg';
import {
  Routes,
  Route,

} from "react-router-dom";
import './App.css';
// import Register from "./component/register"
import Navigation from "./component/navigation"
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
