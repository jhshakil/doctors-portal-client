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
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppointment from './Page/Dashboard/MyAppointment';
import MyReviews from './Page/Dashboard/MyReviews';
import SignUp from './Page/signUp/SignUp';
import Users from './Page/Dashboard/Users';
import RequiredAdmin from './Page/Login/RequiredAdmin';
import AddDoctors from './Page/Dashboard/AddDoctors'
import ManageDoctors from './Page/Dashboard/ManageDoctors';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='appointment' element={<RequiredAuth><Appointment></Appointment></RequiredAuth>}></Route>
        <Route path='dashboard' element={<RequiredAuth><Dashboard></Dashboard></RequiredAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='users' element={<RequiredAdmin><Users></Users></RequiredAdmin>}></Route>
          <Route path='addDoctors' element={<RequiredAdmin><AddDoctors></AddDoctors></RequiredAdmin>}></Route>
          <Route path='manageDoctors' element={<RequiredAdmin><ManageDoctors></ManageDoctors></RequiredAdmin>}></Route>
        </Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
