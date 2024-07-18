import { useState } from 'react'
import appContext from "./appContext";
import propTypes from 'prop-types'

function Provider({ children }){
    const [products, setProducts] = useState([]);
    const [cartItens, setCartItens] = useState([]);
    const [load, setLoad] = useState(true);
    const [cartVisible, setCartVisible] = useState(false);


    const value = {
        products,
        setProducts,
        load,
        setLoad,
        cartItens,
        setCartItens,
        cartVisible,
        setCartVisible
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