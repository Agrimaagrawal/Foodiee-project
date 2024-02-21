import React ,{useState} from 'react'
import fastfood from '../assets/pizza.jpg'
import maincourse from '../assets/foodcourt.jpg'
import sweets from '../assets/gulabjamun.jpg'
import drinks from '../assets/strawberryshake.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const food=[
  {
    name:"maincourse",
    img:maincourse
  },
  {
   name:"fastfood",
   img:fastfood
  },
  {
    name:"sweets",
    img:sweets

  },
  {
    name:"drinks",
    img:drinks
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
  const [menu,setMenu]=useState(specificfood)
  const handleClick=(e)=>{
    console.log(e.name)
    console.log(specificfood)
    
    const filtered=specificfood.filter(specificfood=>{return specificfood.name===e.name})
    setMenu(filtered)
    console.log(menu)
    
    
  }

  return (
    <div>
      <h1 className='text-center font-bold text-[50px] text-orange-400 mt-20'>Menu</h1>
      <div className='w-auto h-full m-24 flex'>
        <div className='w-[200px] h-[300px] border-r-4 border-orange-400 flex flex-col'>
          {
            food.map((e)=>{
              return(
                <div>
                  <div className='flex m-2 ' onClick={()=>{handleClick(e)}}>
                <img src={e.img} className="w-[60px] h-[60px] rounded-full border-8 border-orange-400 hover:border-orange-800 " ></img>
                <div className='text-lg p-2 mt-2 h-[40px] rounded-md bg-orange-400'>{e.name}</div>
                </div>
              </div>
              )
            })
          }
         
        </div>
        <div className='flex gap-9'>
        
        
          {
            
            menu.map((e)=>{
              return(
                
              <div className='w-[200px] h-[300px] bg-orange-400 ml-8 p-4 rounded-md'>
                <img src={e.img}></img>
                <div className="text-lg p-2">{e.item}</div>
                <div className='pl-2'>Rs.{e.rate}</div>
                <button className='p-2 bg-white text-black w-full mt-4'>Add to cart</button>


              </div>
              
              
              )

            })
          }
          
          


        
        </div>

      </div>

    </div>
  )
}

export default Menu
