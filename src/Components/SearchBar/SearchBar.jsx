import { IoIosSearch } from "react-icons/io";
import {useState, useContext} from 'react'
import './SearchBar.css'
import Api from "../Api-Mercado-Livre/api";
import appContext from "../../Context/appContext";


function SearchBar(){
    const {setProducts, setLoad} = useContext(appContext);
    const[searchValue, setSearchValue] = useState('');

    
    const handleSearch = async () => {
        event.preventDefault()
        setLoad(true)
        const products = await Api(searchValue);
        setProducts(products)
        setLoad(false)
        setSearchValue('');
    }

    return(<> 
        <form  className="searchPrincipal" onSubmit={handleSearch}>
            <input type="search" placeholder='Buscar Produtos' className='searchInput' required value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button type='sumbit' className='searchButton'><IoIosSearch></IoIosSearch></button>
        </form> 
    </>)
}

export default SearchBar;