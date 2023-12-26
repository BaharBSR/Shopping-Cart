import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//components
import Cart from './shared/Cart';

// context 
import { cartContext } from '../context/CartContextProvider';

const ShopCart = () => {

    const { state, dispatch } = useContext(cartContext);

    return (
        <div className='flex flex-col md:flex-row justify-between items-start mt-40 mb-44 mx-12 transition-all duration-200 ease'>
            <div className='w-3/4'>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className='w-64 mx-auto md:w-1/4 md:ml-4 bg-white border border-silver-500 rounded text-left'>
                    <p className='text-gray-61 my-5 mx-2.5'><span className='text-blue-960 font-bold'>Total Items: </span> {state.itemsCounter}</p>
                    <p className='text-gray-61 my-5 mx-2.5'><span className='text-blue-960 font-bold'>Total Payments: </span> {state.total}</p>
                    <div className='flex justify-between items-baseline mt-12 mb-5 mx-2.5'>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })} className='inline-block bg-green-40 py-1.5 px-4 text-white font-bold rounded mb-5 transition-all duration-200 ease-in shadow-2xl cursor-pointer hover:bg-green-41'>Checkout</button>
                        <button onClick={() => dispatch({ type: "CLEAR" })} className='cursor-pointer text-green-40 transition-all duration-200 ease text-base hover:text-green-41'>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout &&
                <div className='border border-silver-500 p-2'>
                    <h3 className='text-green-41 mt-8 mx-12 text-lg mb-2'>Checked Out Successfully</h3>
                    <Link to='/products' className='bg-blue-960 inline-block text-white h-8 rounded cursor-pointer transition-all duration-200 ease w-24 font-bold leading-8 shadow-xl ml-1.5 hover:bg-blue-970 text-center'>Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 &&
                <div className='border border-silver-500 p-2'>
                    <h3 className='text-green-41 mt-8 mx-12 text-lg mb-2'>Whant To Buy?/</h3>
                    <Link to='/products' className='bg-blue-960 inline-block text-white h-8 rounded cursor-pointer transition-all duration-200 ease w-24 font-bold leading-8 shadow-xl ml-1.5 hover:bg-blue-970 text-center'>Go To Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;