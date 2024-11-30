import React, { useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUser = useLoaderData();
    const [users,setUsers] = useState(loadedUser);
    const handleUserDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          fetch(`http://localhost:4000/users/${id}`,{
            method:'DELETE',
        })
        .then(res=> res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted.",
                icon: "success"
              });

              const remainingUsers= users.filter(user => user._id !== id );
             setUsers(remainingUsers);
            }
          });


    }
     return (
        <div>
            <Navbar/>
           <h2 className="text-3xl text-center my-8">Users:{users.length} </h2>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Creation Time</th>
        <th>Last Login Time</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   {
    users.map(user=>  <tr key={user._id}>
        <th>1</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.createdAt}</td>
        <td>{user.lastLoginTime}</td>
        <td className='flex gap-4'>
            <button className='btn'>Edit</button>
            <button onClick={()=>handleUserDelete(user._id)} className='btn'>Delete</button>
        </td>
      </tr> )
   }
    </tbody>
  </table>
</div>
           <Footer/>
        </div>
    );
};

export default Users;