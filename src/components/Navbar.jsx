import './../styles/navbar.css'
import searchIcon from './../assets/search.svg'
import cartIcon from './../assets/shopping-bag.svg'
import logo from './../assets/chef-hat.svg'

const Navbar = () => {
	return(
		<>
		<nav className = 'nav-bar'>
        <ul className = 'nav-items'>
            <li className="nav-link"><img src = {logo} />FooDie</li>
            <li className="nav-link">Home</li>
            <li className="nav-link">Menu</li>
            <li className="nav-link">Contact</li>
            <li className="nav-link">Shop</li>
            <li className="nav-link"><form className = "search">
                <input type = "text" />
                <button type = "submit" className="search-icon"><img  src= {searchIcon}/>
                </button>
            </form>
            </li>
            <li className="nav-link">
           <img src = {cartIcon} />
            </li>
        </ul>
    </nav>
		</>
		)
	
}
export default Navbar;