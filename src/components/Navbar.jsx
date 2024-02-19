import './../styles/navbar.css'
import searchIcon from './../assets/search.svg'
import cartIcon from './../assets/shopping-bag.svg'
import logo from './../assets/chef-hat.svg'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
const Navbar = () => {
    const[menu,setMenu] = useState(0)
    const navigate =useNavigate()
    const handleSubmit =  (e) =>{
        e.preventDefault();
    navigate('/search')
    }
   
	return(
		<>
		<nav className = 'nav-bar'>
        <div className="nav-link"><img src = {logo} /><Link to = '/'>FooDiee</Link></div>
        <ul className = {menu?"nav-items":"nav-items active"}>
            {/* <li className="nav-link"><img src = {logo} />FooDie</li> */}
          <li className="nav-link"><Link to = '/dashboard'> Dashboard</Link></li>
            <li className="nav-link">Menu</li>
            <li className="nav-link">Contact</li>
            <li className="nav-link">Shop</li>
            <li className="nav-link"><form className = "search" onSubmit={handleSubmit}>
                <input type = "text" />
                <button type = "submit" className="search-icon" ><img  src= {searchIcon}/>
                </button>
            </form>
            </li>
            <li className="nav-link">
           <img src = {cartIcon} />
            </li>
        </ul>
        <div class = {menu?"hamburger click":"hamburger"} onClick={()=>{setMenu(!menu)}}>
				
				<div class ="bar" ></div>
				<div class ="bar" ></div>
				<div class ="bar" ></div>
			</div>
    </nav>
		</>
		)
	
}
export default Navbar;