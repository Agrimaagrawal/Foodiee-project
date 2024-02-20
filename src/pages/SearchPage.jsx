import Navbar from "../components/Navbar"
import search from './../assets/search.svg'
import filterImg from './../assets/filter.svg'
import './../styles/search.css'
import Card from "../components/Card"
import { useState } from "react"


const SearchPage = () =>{
    const foods = [
        {
            name:"Ladoo",
            price:"393",
            veg:false
        },
        {
            name:"Nooles",
            price:"393",
            veg:true
        }, 
         {
            name:"pasta",
            price:"393",
            veg:false
        },
          {
            name:"pizza",
            price:"393",
            veg:true
        }
    ]
    const[filter,setFilter] = useState(false);
return(
    <>
    <Navbar />
    <div className="search-main">
       
            <form className="search-form">
                <input type = "text" placeholder="Search Your Favorite food"></input>
                <button type="submit">
                    <img src= {search} alt="" />
                </button>
                <img src = {filterImg}  onClick={() => {setFilter(!filter)}}/>
               
            </form>
            {
                    filter && <div className="filter">
                        <p>Price Low to High</p>
                        <p>Price High to Low</p>
                        <p>Discount High</p>
                    </div>
                }
        <div className="search-con">
              {foods.map((food) => <Card food = {food} />)}
        </div>
    </div>
    </>
)

}
export default SearchPage