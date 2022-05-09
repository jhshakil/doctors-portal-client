import logo from './logo.svg';
import './App.css';
import Navbar from './Page/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home'
import About from './Page/About/About'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
