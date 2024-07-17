import { IoCartOutline } from "react-icons/io5";
import './CardBtn.css'
function CardBtn(){
    return(<>
            <button className="cardButton"><IoCartOutline/>
                <span className="status">1</span>
            </button>
           </>);
}

export default CardBtn;