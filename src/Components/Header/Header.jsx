import CardBtn from '../CartBtn/CardBtn';
import SearchBar from '../SearchBar/SearchBar';

import './Header.css'

function Header(){

    return(<>
    
            <header className='header'>
                <div className="container">
                    <SearchBar></SearchBar>
                    <CardBtn/>
                </div>
            </header>

           </>);
}

export default Header;