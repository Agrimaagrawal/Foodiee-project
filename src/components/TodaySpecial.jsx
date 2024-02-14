import noodle from './../assets/noodles.jpg'
import pasta from './../assets/pasta.jpg'
import pizza from './../assets/pizza.jpg'
import './../styles/specials.css'

const TodaySpecial = () =>{
return (
    <>
    <div className="special">
        <p>ENJOY OUR BEST MENU AND<br /><span className='orange'>&nbsp;SPECIALS&nbsp;</span>FOR TODAY</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia recusandae error obcaecati eum libero ea.</p>
        <div className="special-con">
            <div className="special-card"><img src={noodle} alt="today special"/><div className="spec-det"><p>Veg Hakka Noodles</p><span><b>&#8377;400</b></span></div></div>
            <div className="special-card"><img src={pizza} alt="today special" /><div className="spec-det"><p>Margrita Pizza</p><span>&#8377;800</span></div></div>
            <div className="special-card"><img src={pasta} alt="today special" /><div className="spec-det"><p>White Sauce Pasta</p><span>&#8377;500</span></div></div>
        </div>
    </div>
    </>
)
}
export default TodaySpecial