import React from 'react';
import {useDispatch} from "react-redux";
import {setBus} from "../../redux/slices/busketSlice";

const Products = ({i}) => {
    const dispatch = useDispatch()

    const getBus = () => dispatch(setBus(i))

    return (
        <>
            <div className='box'>
                <img src={i.image} alt=""/>
                <p>{i.name}</p>
                <p>{i.price}</p>
                <button onClick={getBus}>busket</button>
            </div>
        </>
    );
};

export default Products;