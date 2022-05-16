import './App.css';
import Navbar from './Page/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Appointment from './Page/Appointment/Appointment';
import Login from './Page/Login/Login';
import RequiredAuth from './Page/Login/RequiredAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignOut from './Page/signOut/SignOut';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<RequiredAuth><Appointment></Appointment></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signout' element={<SignOut></SignOut>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
