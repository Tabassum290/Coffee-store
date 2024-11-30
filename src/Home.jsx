import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { useLoaderData } from 'react-router-dom';
import CoffeeCard from './Components/CoffeeCard';

const Home = () => {
    const loadedcoffees = useLoaderData();
    const [coffees,setCoffees] = useState(loadedcoffees);
    return (
        <div>
            <Navbar/>
            <h1 className='text-5xl text-purple-600 text-center my-4'>This is Home</h1>
           <main className='w-11/12 mx-auto'>
           <div  className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           {
            coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}
            coffees = {coffees}
            setCoffees = {setCoffees}
            ></CoffeeCard>)
           }
           </div>
    </main>
            <Footer/>
        </div>
    );
};

export default Home;