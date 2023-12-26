import React, { useContext } from 'react';


//contexts
import { cartContext } from '../../context/CartContextProvider';

//functions
import { shorten } from '../../helper/function';

// icons 
import trashIcon from '../../assets/icons/trash.svg'

const Cart = (props) => {

    const { dispatch } = useContext(cartContext);

    const { image, title, price, quantity } = props.data;
    return (
        <div className='flex flex-col md:flex-row justify-between items-center p-4 ml-12 w-11/12 rounded border border-silver-500 mb-12 shadow-3xl'>
            <img src={image} alt='product' className='w-56 h-56 overflow-hidden m-1'/>
            <div className='m-1'>
                <h3 className='text-blue-960 text-lg font-bold leading-8 '>{shorten(title)}</h3>
                <p className=' text-green-40 font-bold leading-8'>{price} $</p>
            </div>
            <div className='bg-orange-500 m-1 text-2xl text-white text-center flex items-center justify-center h-8 w-8 rounded shadow-4xl  font-bold leading-8 p-1'>
                <span > {quantity} </span>
            </div>
            <div className='flex items-center m-1'>
                {
                    quantity > 1 ?
                        <button onClick={() => dispatch({ type: "DECREASE", payload: props.data })} className='text-2xl bg-blue-960 text-white rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8 hover:bg-blue-970'>-</button> :
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props.data })}><img src={trashIcon} alt='trash' className='text-2xl bg-blue-960 text-white h-8 w-8 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8 hover:bg-blue-970 p-1' /></button>
                }
                <button onClick={() => dispatch({ type: "INCREASE", payload: props.data })} className='text-2xl bg-blue-960 text-white h-8 w-8 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8 hover:bg-blue-970'>+</button>
            </div>
        </div>
    );
}; 

export default Cart;