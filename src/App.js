import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

//components
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';
import Navbar from './component/shared/Navbar';
import ShopCart from './component/ShopCart';

//context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';


const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/products' element={<Store />} />
            <Route path='/Cart' element={<ShopCart />} />
            <Route path='/*' element={<Navigate to='/products'/>}/>
          </Routes>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;