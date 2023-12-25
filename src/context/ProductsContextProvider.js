import React, { useEffect, useState } from 'react';

//API
import { getProducts } from '../services/api';

// context 
export const ProductsContext = React.createContext();

const ProductsContextProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchAPI();
    }, [])

    const fetchAPI = async () => {
        const data = await getProducts();
        setProducts(data);
    }
    return (
        <div>
            <ProductsContext.Provider value={products}>
                {children}
            </ProductsContext.Provider>
        </div>
    );
};

export default ProductsContextProvider;