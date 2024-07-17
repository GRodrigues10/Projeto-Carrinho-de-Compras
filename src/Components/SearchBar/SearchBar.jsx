import { IoIosSearch } from "react-icons/io";
import {useState} from 'react'
import './SearchBar.css'


function SearchBar(){

    const[searchValue, setSearchValue] = useState('');

    return(<> 
        <form className="searchPrincipal">
            <input type="search" placeholder='Buscar Produtos' className='searchInput' required value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button type='sumbit' className='searchButton'><IoIosSearch></IoIosSearch></button>
        </form> 
    </>)
}

export default SearchBar;