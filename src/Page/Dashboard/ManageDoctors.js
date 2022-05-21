import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, refetch } = useQuery('doctor', () =>
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (email, name) => {
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Doctor ${name} is deleted`)
                    refetch();
                } else {
                    toast.error('Failed to delete the doctor')
                }
            })
    }
    return (
        <div>
            <h1>Doctors : {doctors?.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <tr key={doctor._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-16 rounded">
                                            <img src={doctor.img} alt="Tailwind-CSS-Avatar-component" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.specialty}</td>
                                <td><button onClick={() => handleDelete(doctor.email, doctor.name)} class="btn btn-sm btn-error">Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;