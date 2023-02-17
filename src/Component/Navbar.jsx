import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from '../Images/Cart.png'
import '../CSS/navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { Filter } from '../Redux/Reducers/reducer'

function Navbar() {
    const carddata = useSelector((state) => state.INC.value)
    const dispatch=useDispatch()
    return (
        <>
            <nav>
                <div className="navbar">
                    <div className='nav-links'>
                        <ul>
                            <li><NavLink className="links" to="/">All Products</NavLink></li>
                            <li><NavLink className="links" to="/" onClick={()=>dispatch(Filter)}>Featured Products</NavLink></li>
                        </ul>
                    </div>
                    <div className='cart-logo'>
                        <img src={Cart} height={40} width={50} alt="cart-logo" /><span className='cart-product'>{carddata}</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar