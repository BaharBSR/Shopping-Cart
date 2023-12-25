import React, { useContext } from 'react';

//component
import Product from './shared/Product';

//context
import { ProductsContext } from '../context/ProductsContextProvider';

const Store = () => {

    const products = useContext(ProductsContext);

    return (
        <div className='flex flex-wrap justify-between'>
            {

                products.map(product => <Product key={product.id} productData={product} />)
            }
        </div>
    );
};

export default Store;