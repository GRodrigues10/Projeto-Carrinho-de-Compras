import { IoIosSearch } from "react-icons/io";
import {useState} from 'react'
import './SearchBar.css'
import Api from "../Api-Mercado-Livre/api";


function SearchBar(){

    const[searchValue, setSearchValue] = useState('');

    const handleSearch = async () => {
        event.preventDefault()
        const products = await Api();
        console.log(products)
        setSearchValue('');
    }

    return(<> 
        <form className="searchPrincipal" onSubmit={handleSearch}>
            <input type="search" placeholder='Buscar Produtos' className='searchInput' required value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button type='sumbit' className='searchButton'><IoIosSearch></IoIosSearch></button>
        </form> 
    </>)
}

export default SearchBar;