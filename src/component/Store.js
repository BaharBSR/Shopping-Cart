import React, { useContext } from 'react';

//component
import Product from './shared/Product';

//context
import { ProductsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div>
        <div className='flex flex-wrap justify-center items-center py-4 px-2.5 mt-40 md:px-10 lg:mt-24 lg:px-20'> 
            {

                products.map(product => <Product  key={product.id} productData={product} />)
            }
        </div>
        </div>
    );
};

export default Store;