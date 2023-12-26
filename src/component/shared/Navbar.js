import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../context/CartContextProvider';

//icons 
import shopIcon from '../../assets/icons/shop.svg'

const Navbar = () => {

    const { state } = useContext(cartContext);

    return (
        <div className='bg-white w-full mr-24 shadow-3xl fixed top-0 right-0 left-0'>
            <div className='flex justify-between items-center py-4 px-5 sm:px-10 md:px-20 '>
                <Link to='/products' className='text-blue-960 font-bold border-b-3 border-b-blue-960 rounded-sm px-1 transition-all duration-200 ease hover:text-blue-970 hover:border-b-blue-970' >Products</Link>
                <div  className='relative'>
                   <Link to='/Cart'> <img src={shopIcon} alt='shop' className='w-10 text-blue-960'/></Link>
                    <span className='absolute top-0 right-0 bg-blue-970 rounded-full w-4 h-4 text-center text-xs leading-4 font-bold text-white'>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;