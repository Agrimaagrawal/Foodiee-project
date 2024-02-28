import foodcourt from './../assets/foodcourt.png'
const FoodCourt = () =>{
    return(
        <>
        <div className="court-main">
            <img src={foodcourt} alt="Food item" className="hero-img" />
            <div className="hero-con">
                <div className="court-text">
                    Your Food Court at home<br/>
                    WHY CHOOSE US FOR<p className='orange'>YOUR HEALTHY FOOD</p>
                    <button className="cta">Order Now</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default FoodCourt