import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {busSelect} from "../../redux/slices/busketSlice";

const Header = () => {
    const {bus} = useSelector(busSelect)
    return (
        <div className='head'>
            <NavLink className='link' to={'/'}>
                <h2>Home</h2>
            </NavLink>
            <NavLink className='link' to={'/busket'}>
                <h2>Busket  {bus.length}</h2>
            </NavLink>
        </div>
    );
};

export default Header;