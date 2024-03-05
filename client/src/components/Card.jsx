import veg from './../assets/vegan.svg'
const Card = ({food}) =>{
    return(
        <>
      
        <div className="card">
                <img src={food.imgurl} alt={food.name} className="card-img" />
                <div className="card-details">
                    <p>{food.name}</p>
                    <p>&#8377;{food.price}</p>
                   <p> <button> Add to Cart</button> </p>
                    {food.veg && <span ><img  className="veg"src = {veg} /></span>}
                  
                    
                </div>
            </div> 
        </>
    )
}
export default Card