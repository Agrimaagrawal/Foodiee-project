import React ,{useState,useEffect} from 'react'
import fastfood from '../assets/pizza.jpg'
import maincourse from '../assets/foodcourt.jpg'
import sweets from '../assets/gulabjamun.jpg'
import drinks from '../assets/strawberryshake.jpg'
import bread from '../assets/bread.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardSlider from './CardSlider';




const food=[
  {
    name:"maincourse",
    img:maincourse
  },
  {
   name:"starters",
   img:fastfood
  },
  {
    name:"desserts",
    img:sweets

  },
  {
    name:"drinks",
    img:drinks
  },
  {
    name:"breads",
    img:bread
  }
]
const specificfood=[
  {
    name:"maincourse",
    img:maincourse,
    item:"dal",
    rate:"200"

  },
  {
    name:"fastfood",
    img:maincourse,
    item:"dal",
    rate:"200"
  },
 
]

const Menu = () => {
  
  const[item,setItem]=useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/products/getallproducts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setItem(data.products);
      });
  }, []);
const mainitem=item.filter(item=>{return item.category==="maincourse"})
console.log(mainitem)
  const [menu,setMenu]=useState(mainitem)
   const handleClick=(e)=>{
    console.log(e.name)
    console.log(specificfood)
    
    const filtered=item.filter(item=>{return item.category===e.name})
    setMenu(filtered)
    
    
    
  }

  return (
    <div>
      <h1 className='text-center font-bold text-[50px] text-orange-400 mt-20'>Menu</h1>
      <div className='w-auto h-full  m-2 md:m-24 flex flex-col md:flex-row'>
        <div className=' w-[100px] md:w-[200px]  h-[200px] md:h-[400px] md:border-r-4 border-orange-400 flex md:flex-col flex-row'>
          {
            food.map((e)=>{
              return(
                <div>
                  <div className='flex flex-col md:flex-row md:m-2 ' onClick={()=>{handleClick(e)}}>
                <img src={e.img} className=" w-[60px] h-[60px] rounded-full border-8 border-orange-400 hover:border-orange-800 " ></img>
                <div className='text-lg p-2 mt-2 h-[40px] rounded-md bg-orange-400'>{e.name}</div>
                </div>
              </div>
              )
            })
          }
         
        </div>
     
       
        <div className=' '>
         
        <CardSlider items={menu.length === 0 ? mainitem : menu} limit={4} />
          {/*
            menu.length===0?
            
              mainitem.map((e)=>{
                return(
                 
                <div className='w-[200px] h-auto bg-orange-400 ml-8 p-4 rounded-md'>
                  <img src={e.imgurl} className='w-[200px] h-[150px]'></img>
                  <div className="text-lg p-2">{e.name}</div>
                  <div className='pl-2'>Rs.{e.price}</div>
                  <button className='p-2 bg-white text-black w-full mt-4'>Add to cart</button>
  
  
                </div>
                
                
                )
  
              }):menu.map((e)=>{
                return(
                  
                <div className='w-[200px] h-auto bg-orange-400 ml-8 p-4 rounded-md'>
                  <img src={e.imgurl} className='w-[200px] h-[150px]'></img>
                  <div className="text-lg p-2">{e.name}</div>
                  <div className='pl-2'>Rs.{e.price}</div>
                  <button className='p-2 bg-white text-black w-full mt-4'>Add to cart</button>
  
  
                </div>
                
                
                )
  
              })
             
            
            
            */
          }
          
          


        
        </div>
        

      </div>

    </div>
  )
}

export default Menu
