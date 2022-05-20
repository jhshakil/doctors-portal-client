import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import useAdmin from '../../hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div class="drawer drawer-mobile">
            <input id="sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl font-bold text-red-500'>Welcome to Your Dashboard</h1>
                <Outlet></Outlet>
                {/* <label for="sidebar" class="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

            </div>
            <div class="drawer-side">
                <label for="sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointment</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    <li>{admin && <>
                        <Link to='/dashboard/users'>Users</Link>
                        <Link to='/dashboard/addDoctors'>Add Doctors</Link>
                    </>}</li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;