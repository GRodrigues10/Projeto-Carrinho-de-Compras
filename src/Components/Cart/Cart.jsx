import { useContext } from 'react';
import CartItem from '../CartItens/CartItem'; // Renomeado para evitar conflito
import './Cart.css';
import appContext from '../../Context/appContext';
import formatCurrency from '../../Utils/FormatCurrency';


function Cart() {
    const { cartItens, cartVisible } = useContext(appContext); 

    const totalPrice = cartItens.reduce((prev, next)=>{
        return prev + next.price
    },0)

    if (!Array.isArray(cartItens)) {
        console.error('cartItens is not an array:', cartItens);
        return null; // Ou uma mensagem de erro amigável
    }

    return (
        <>
            <section className={`cart-section ${cartVisible ? 'cart--active':''}`}>
                <div className="cart-itens">
                    {cartItens.map((cartItem) => (
                        <CartItem key={cartItem.id} data={cartItem} />
                    ))}
                </div>
                <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
            </section>
        </>
    );
}

export default Cart;