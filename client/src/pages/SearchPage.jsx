import Navbar from "../components/Navbar"
import search from './../assets/search.svg'
import filterImg from './../assets/filter.svg'
import './../styles/search.css'
import Card from "../components/Card"
import { useState,useEffect } from "react"
import axios from 'axios';
 
const SearchPage = () =>{
    const [searchTerm,setSearchTerm] = useState('');
    const[foods, setFoods] = useState('');
    useEffect(() => {
        getData(searchTerm);
      }, [searchTerm]);
  const getData = async (searchTerm) => {
    try {
      const apiUrl = `http://localhost:4000/products/search?q=${searchTerm}`;
      const apiResponse = await axios.get(apiUrl);
      setFoods(apiResponse.data.products);
      
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };
console.log(foods);
    
    const[filter,setFilter] = useState(false);
return(
    <>
    <Navbar />
    <div className="search-main">
       
            <form className="search-form" onSubmit={(e)=>{
                e.preventDefault()
                getData(searchTerm)

            }}>
                <input type = "text" placeholder="Search Your Favorite food" 
                onChange = {(e) => {setSearchTerm(e.target.value)}}
                ></input>
                <button type="submit">
                    <img src= {search} alt="" />
                </button>
                <img src = {filterImg}  onClick={() => {setFilter(!filter)}}/>
               
            </form>
            {
                    filter && <div className="filter">
                        <button className = "menu-item" onClick = {()=>{foods.sort((firstproduct, secondproduct) => firstproduct.price-secondproduct.price); setFilter(!filter);}}>Price: low to high</button>
			<button className = "menu-item"onClick = {()=>{foods.sort((firstproduct, secondproduct) => secondproduct.price-firstproduct.price); setFilter(!filter);}}>Price: high to low</button>
			<button className = "menu-item"onClick = {()=>{foods.sort((firstproduct, secondproduct) => secondproduct.discount-firstproduct.discount); setFilter(!filter);}}>Dicount: high to low</button>
			{/* <button className = "menu-item"onClick = {()=>{foods.sort((firstproduct, secondproduct) => secondproduct.rating-firstproduct.rating); setOpen(!Open);}}>Rating: high to low</button> */}
                    </div>
                }
        <div className="search-con">
            { foods.length > 0 && foods.map((food) => <Card food = {food} />)}
            {foods.length <= 0 && <h1 className="orange">Not Found</h1> }
            {console.log(foods.length)}
        </div>
    </div>
    </>
)

}
export default SearchPage