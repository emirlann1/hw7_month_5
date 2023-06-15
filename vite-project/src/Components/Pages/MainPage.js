import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts, prodSelect} from "../redux/slices/productsSlice";
import Products from "../Components/Products/Products";

const MainPage = () => {
    const dispatch = useDispatch()
    const {products, load} = useSelector(prodSelect)

    useEffect(() => {
        dispatch(getProducts())
    },[dispatch])
    return (
        <div>
            <div className="container">
                <div className="main">
                    {
                        !load
                        ?
                        products.map(i => <Products i={i}/>)
                        :
                        <div>
                            <h2>Loading.....</h2>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;