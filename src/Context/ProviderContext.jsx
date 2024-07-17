import React, { useState } from 'react'
import appContext from "./appContext";
import propTypes from 'prop-types'

function Provider({ children }){
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    const value = {
        products,
        setProducts,
        load,
        setLoad
    }
    return(<>
            <appContext.Provider value={value}>
                {children}
            </appContext.Provider>
           </>);
}
export default Provider;

Provider.propTypes = {

    children: propTypes.any,

}.isRequired;