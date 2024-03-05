import React, { useState ,useEffect} from 'react';
import Card from './Carditem';

const CardSlider = ({ items }) => {
  const [limit, setLimit] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [limitedItems, setLimitedItems] = useState([]);
 
 
  console.log(items)
  console.log(limit)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setLimit(2);
      } else if (window.innerWidth >768 && window.innerWidth<900){
        setLimit(2);
      }
      else{
        setLimit(5);
      }
    };

    handleResize(); // Set initial limit
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  useEffect(() => {
    setLimitedItems(items.slice(currentIndex, currentIndex + limit));
  }, [items, currentIndex, limit]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === items.length - 1) return 0;
      if (prevIndex === limitedItems.length - 1) return 0;
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) return items.length - 1;
      if (prevIndex === 0) return limitedItems.length - 1;
      return prevIndex - 1;
    });
  };
  return (
    <div className="relative">
    <div className="overflow-hidden w-full flex relative">
      <div className="flex items-center">
        <button
          className="absolute top-0 bottom-0 left-0 flex items-center justify-center bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={prevSlide}
        >
          &#10094;
        </button>
      </div>
      <div className="flex-1 flex">
        {limitedItems.map((item, index) => (
        
          <div key={index} className={`slide ${index === currentIndex ? 'active' : ''}`}>
            {console.log(index)}
            <Card {...item} />
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <button
          className="absolute top-0 bottom-0 right-0 flex items-center justify-center bg-gray-800 text-white p-2 rounded-full z-10"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  </div>
);
};


export default CardSlider;
