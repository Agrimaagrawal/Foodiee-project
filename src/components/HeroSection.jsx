import './../styles/hero.css'
import heroImg from './../assets/heroimage.png'
const HeroSection = () => {
    return(
    <>
        <div className="hero-main">
        <div className="hero-con"><div className="hero-text">Fast</div>
        <div className="hero-text">Food<br />Delivery</div>
        <div className="hero-text">We Deliver Food Way Fast Than The rocket</div>
        <div className="hero-text">
            <span>&#9654;<b>Watch Video</b></span> 
            <button className=" cta">Order Now</button>
        </div>
        <div className="hero-text">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <p className="heading"><b>5 star rating</b></p>
            <p>Based on thousands of reviews</p>
        </div>
      </div>
        <img className="hero-img"src = {heroImg} />
</div>
    </>)
}
export default HeroSection