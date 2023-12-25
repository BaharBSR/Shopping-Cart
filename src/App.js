import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'

//components
import Store from './component/Store';
import ProductDetails from './component/ProductDetails';
import Navbar from './component/shared/Navbar';

//context
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';


const App = () => {
  return (
    <div>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navbar /> 
          <Switch>
            <Route path='/products/:id' component={ProductDetails} />
            <Route path='/products' component={Store} />
            <Redirect to='/products' />
          </Switch>
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
};

export default App;