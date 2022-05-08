import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div >
        <nav className='grid md:flex gap-5 justify-center bg-teal-400 p-4 text-2xl font-mono font-bold'>
            
            <div className='flex text-orange-800 font-thin gap-3'> 
                <img className='w-10 h-10 ' src="refrizartor.png" alt="" />
                <h3>Refrigerator <span>Mart</span></h3>

            </div>
       
            
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/inventory">Manage Inventory</CustomLink>
            <CustomLink to="/myItems">My Items</CustomLink>
            <CustomLink  to = "/blogs">Blogs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            {/* {
                user ?
                <button onClick={handleSignOut} className=' text-2xl font-mono font-bold'>signout</button>
            :
            <CustomLink  to="/login">Login</CustomLink>
        } */}
        </nav>
    </div>
    );
};

export default Header;