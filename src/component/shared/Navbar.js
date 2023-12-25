import React, { useContext } from 'react';

//context
import { cartContext } from '../../context/CartContextProvider';

const Navbar = () => {

    const { state } = useContext(cartContext);

    return (
        <div>

        </div>
    );
};

export default Navbar;