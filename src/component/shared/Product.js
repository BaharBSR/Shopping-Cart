import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Function
import { shorten, isInCart, quantityCount } from '../../helper/function';

//Icons
import trashIcon from '../../assets/icons/trash.svg'

//contexts
import { cartContext } from '../../context/CartContextProvider';

const Product = ({ productData }) => {

    const { state, dispatch } = useContext(cartContext);

    return (
        <div className='md:w-64 w-3/4 sm:w-45 border border-silver-500 rounded-large overflow-hidden bg-white mb-2.5 mx-10 text-center transition-all duration-200 ease hover:shadow-2xl'>
            <img src={productData.image} alt='product' className='w-11/12 sm:w-56 h-52 m-2.5' />
            <h3 className='text-gray-40 text-left mt-6 mb-5 mx-4 text-lg '>{shorten(productData.title)}</h3>
            <p className='text-gray-40 text-left my-4 mx-5 text-sm font-medium'>{productData.price}$</p>
            <div className='flex justify-between items-center mt-8 mb-5 mx-5'>
                <Link to={`/products/${productData.id}`} className='text-blue-960 text-base' >Details</Link>
                <div>

                    {quantityCount(state, productData.id) > 1 && <button onClick={() => dispatch({ type: "DECREASE", payload: productData })} className='text-2xl bg-blue-960 text-white h-8 w-8 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8 hover:bg-blue-970'>-</button>}
                    {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({ type: "REMOVE_ITEM", payload: productData })} className='text-2xl bg-blue-960 text-white h-8 w-8 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8  hover:bg-blue-970'><img src={trashIcon} alt='trash' className='w-5 text-white m-auto' /></button>}
                    {quantityCount(state, productData.id) > 0 && <span className='inline-block w-5 ml-1 text-lg font-bold text-blue-960'>{quantityCount(state, productData.id)}</span>}

                    {
                        isInCart(state, productData.id) ?
                            <button onClick={() => dispatch({ type: "INCREASE", payload: productData })} className='text-2xl bg-blue-960 text-white h-8 w-8 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 font-bold leading-8 hover:bg-blue-970' >+</button> :
                            <button onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })} className='text-sm bg-blue-960 text-white h-8 w-32 rounded cursor-pointer transition-all duration-200 ease shadow-4xl ml-1 hover:bg-blue-970'>Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;