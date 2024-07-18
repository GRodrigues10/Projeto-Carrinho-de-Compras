import { IoCartOutline } from "react-icons/io5";
import './CardBtn.css';
import { useContext } from "react";
import appContext from "../../Context/appContext";

function CardBtn() {
    const { cartItens, cartVisible, setCartVisible } = useContext(appContext);

    return (
        <button onClick={() => setCartVisible(!cartVisible)} className="cardButton">
            <IoCartOutline />
            {cartItens.length > 0 && <span className="status">{cartItens.length}</span>}
        </button>
    );
}

export default CardBtn;