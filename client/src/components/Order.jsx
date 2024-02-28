import foodimage from './../assets/ladoo.jpg'
const Order = ({order}) =>{
    return (
        <>
              <div className="order"><img src = {foodimage}  className = "order-image"/>
                <div className="order-details">
                    <div className="order-name">
                    <h1>{order.name}</h1>    
                    <p>{order.description}</p>
                    <span><b>Ordered On</b></span>   <span>{order.orderedOn}</span> <br />  
                   <span><b>Delivered</b></span>   <span>{order.deliveredOn}</span><br /> 
                   <span><b>Delete</b></span>

                    </div>
                    </div>
                </div>
        </>

    )
}
export default Order
