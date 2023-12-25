import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//context
import { cartContext } from '../../context/CartContextProvider';

//icons
import shopIcon from '../../assets/icons/shop.svg'

const Navbar = () => {

    const { state } = useContext(cartContext);

    return (
        <div>
            <div>
                <Link to='/products' >Products</Link>
                <div>
                    <img src={shopIcon} alt='shop' className='w-4 h-4'/>
                    <span>{state.itemsCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;