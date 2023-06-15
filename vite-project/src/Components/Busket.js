import React from 'react';
import {useSelector} from "react-redux";
import {busSelect} from "../redux/slices/busketSlice";

const Busket = () => {
    const {bus} = useSelector(busSelect)


    return (
        <div>
            {
                bus.map(i => <div className='box'>
                    <img src={i.image} alt=""/>
                    <p>{i.name}</p>
                    <p>{i.price}</p>
                </div>)
            }
        </div>
    );
};

export default Busket;