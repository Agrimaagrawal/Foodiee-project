import ladoo from './../assets/ladoo.jpg'
import veg from './../assets/vegan.svg'
import addtocart from './../assets/addtocart.svg'
const Card = ({food}) =>{
    return(
        <>
        {console.log(food)}
        <div className="card">
                <img src={ladoo} alt="" className="card-img" />
                <div className="card-details">
                    <p>{food.name}</p>
                    <p>&#8377;{food.price}/kg</p>
                   <p> <button> Add to Cart</button> </p>
                    {food.veg && <span ><img  className="veg"src = {veg} /></span>}
                  
                    
                </div>
            </div> 
        </>
    )
}
export default Card