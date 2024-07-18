import { BsCartDashFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import formatCurrency from "../../Utils/FormatCurrency";
import './CartItens.css';
import { useContext } from "react";
import appContext from "../../Context/appContext";

function CartItems({ data }) {
    const { cartItens, setCartItens } = useContext(appContext);
    const { id, thumbnail, title, price } = data;

    const handleRemoveProduct = () => {
        const updatedItems = cartItens.filter((item) => item.id !== id);
        setCartItens(updatedItems);
    }

    return (
        <section className="cartItem cart--active">
            <img src={thumbnail} alt="Imagem do produto" className="cartItemImage" />
            <div className="cartItemContent">
                <h3 className="cartItemTitle">{title}</h3>
                <h3 className="cartItemPrice">{formatCurrency(price, 'BRL')}</h3>
                <button type="button" onClick={handleRemoveProduct} className="buttonRemove">
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    );
}

CartItems.propTypes = {
    data: PropTypes.object.isRequired
};

export default CartItems;