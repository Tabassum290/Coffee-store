import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {name,quantity,category,details,phone,photo,supplier,taste,_id} = coffee;
    const handleUpdateCoffee = (e)=>{
        e.preventDefault();
         const name = e.target.name.value; 
         const quantity = e.target.quantity.value; 
         const supplier = e.target.supplier.value; 
         const taste = e.target.taste.value; 
         const category = e.target.category.value; 
         const details = e.target.details.value; 
         const phone = e.target.phone.value; 
         const photo = e.target.photo.value; 
         const  updateCoffee = {name,quantity,supplier,taste,category,details,phone,photo};
        

fetch(`http://localhost:4000/coffee/${_id}`,{
    method:'PUT',
    headers:{
    'content-type':'application/json',
},
body : JSON.stringify(updateCoffee),
})
.then(res=>res.json())
.then(data => {
    console.log(data)
    if(data.modifiedCount> 0){
        Swal.fire({
            title: 'Update!',
            text: 'Congrats,Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
    }
})

    }
    return (
        <div className='bg-[#623802]'>
            <Navbar/>
            <h1 className='text-center my-8 text-4xl text-white font-extrabold'>Updated Coffee :{name}</h1>
            <form onSubmit={handleUpdateCoffee} className='my-8 mx-auto w-11/12 p-20 border-2 border-[#efc58f] rounded-lg text-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {/* form name and quantity */}
                <div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Coffee Name</h2>
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="name" defaultValue={name} placeholder="Coffee Name" />
</div>
                <div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Available Quantity</h2>
              
               
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="quantity" defaultValue={quantity} placeholder="Available Quantity" />
</div>
{/* supplier & taste */}
<div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Supplier</h2>
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="supplier" defaultValue={supplier} placeholder="Supplier Name" />
</div>
                <div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Taste</h2>
              
               
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="taste" defaultValue={taste} placeholder="Taste" />
</div>
{/* Category and Details */}
<div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Category</h2>
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="category" defaultValue={category} placeholder="Category Name" />
</div>
                <div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Details</h2>
              
               
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="details" defaultValue={details} placeholder="Details" />
</div>
{/* phone and Photo URL */}
<div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Phone</h2>
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="phone" defaultValue={phone} placeholder="Phone" />
</div>
<div className='form-control'>
                <h2 className='text-lg font-bold text-[#efc58f]'>Photo URL</h2>
  <input className="input input-bordered join-item w-full text-[#895006] font-semibold" name="photo" defaultValue={photo} placeholder="Photo URL" />
</div>
</div>
<input type="submit" value="Update Coffee" className='btn btn-block mt-8 bg-[#efc58f]'/>
            </form>
            <Footer/>
        </div>
    );
};

export default UpdateCoffee;