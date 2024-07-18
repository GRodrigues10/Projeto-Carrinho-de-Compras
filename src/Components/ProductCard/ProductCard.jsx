import './ProductCard.css'
import { FaCartPlus } from "react-icons/fa6";
import propTypes from 'prop-types'
import formatCurrency from '../../Utils/FormatCurrency';
import { useContext } from 'react';
import appContext from '../../Context/appContext';

function ProductCard({ data }){

    const {title, thumbnail, price} = data;

    const {cartItens, setCartItens} = useContext(appContext);

    const handleAddCart = () => setCartItens([... cartItens, data]);
        
    

    return(<>
            <section className="productCard">
                <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product image" className="cardImage"/>
                <div className="cardInfos">
                    <h2 className="cardPrice">{formatCurrency(price, 'BRL')}</h2>
                    <h2 className="cardTitle">{title}</h2>
                </div>
                <button type="button" className="addCardBtn" onClick={handleAddCart}><FaCartPlus/></button>
            </section>
           </>)
}
export default ProductCard;

ProductCard.propTypes = {
    data:propTypes.shape({})
}.isRequired;