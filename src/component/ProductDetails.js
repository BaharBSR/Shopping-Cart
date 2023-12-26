import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

//context
import { ProductsContext } from '../context/ProductsContextProvider';

const ProductDetails = (props) => {
const params=useParams();
    const id =params.id ;
    const data = useContext(ProductsContext);
    const product = data[id - 1];
    const { image, title, description, price, category } = product;

    return (
        <div className='flex justify-center flex-col sm:flex-row sm:justify-between items-center my-40 mx-auto p-5 border border-silver-500 bg-white rounded-lg w-10/12'>
          <img src={image} alt='product' className='w-40'/>
          <div className='text-left m-8 p-5 border border-silver-500 rounded-lg'>
            <h3 className='text-blue-960 mx-8 mt-5'>{title}</h3>
            <p className='text-gray-40 mb-8'>{description}</p>
            <p className='text-gray-40 font-bold mb-12'><span className='text-orange-500 text-base'>Category:</span> {category}</p>
            <div className='flex justify-between items-center'>
                <span className='inline-block bg-green-40 py-1.5 px-4 text-white rounded mb-5 shadow-3xl'>{price}$</span>
                <Link to='/products' className='inline-block bg-blue-960 hover:bg-blue-970 py-1.5 px-4 text-white font-bold rounded transition-all duration-200 ease shadow-3xl'>Back To Shop</Link>
            </div>
          </div>
        </div>
    );
};

export default ProductDetails;